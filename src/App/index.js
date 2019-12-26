// NPM IMPORTS
import axios from 'axios';
import React, { useState } from 'react';

// SHARED IMPORTS
import Button from 'shared/components/Button';
import Document from 'shared/components/Document';
import Form from 'shared/components/Form';
import Input from 'shared/components/Input';
import Label from 'shared/components/Label';
import GlobalStyle from 'shared/styles/GlobalStyle';

// LOCAL IMPORTS
import Layout from './Layout';

// STATEFUL, FUNCTIONAL COMPONENT
const App = () => {
  // STATEFUL HOOKS
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  // DATA HANDLING FUNCTIONS
  const handleChange = (event) => setUsername(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault(); // PREVENT DEFAULT SCREEN REFRESH ON SUBMIT

    // GET ALL DATA FOR USER BY INPUTTED USERNAME
    try {
      const user = await axios.get(`https://api.github.com/users/${username}`);
      console.log(user.data);
      setUserData(user.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  // JSX RETURNED BY COMPONENT
  return (
    <Layout>
      <h1>GITHUB DASH</h1>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="username">
          Github Username
          <br />
          <Input
            id="username"
            type="text"
            placeholder="Ada Lovelace"
            onChange={handleChange}
            required
          />
        </Label>
        <Button type="submit">GENERATE</Button>
      </Form>
      {/* IF USER DATA HAS BEEN FETCHED, RENDER DOCUMENT BELOW FORM */}
      {userData ? <Document userData={userData} /> : null}
      <GlobalStyle />
    </Layout>
  );
};

export default App;
