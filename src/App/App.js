// NPM IMPORTS
import axios from 'axios';
import React, { useState } from 'react';

// SHARED IMPORTS
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

  // DATA HANDLING FUNCTIONS
  const handleChange = (event) => setUsername(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault(); // PREVENT DEFAULT SCREEN REFRESH ON SUBMIT

    // GET ALL DATA FOR USER BY INPUTTED USERNAME
    const user = await axios.get(`https://api.github.com/users/${username}`);
    console.log(user.data);
  };

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
          />
        </Label>
        <button type="submit">GENERATE</button>
      </Form>
      <GlobalStyle />
    </Layout>
  );
};

export default App;
