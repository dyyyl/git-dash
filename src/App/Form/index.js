import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Button from 'shared/components/Button';
import Input from 'shared/components/Input';
import Label from 'shared/components/Label';

import FormContainer from './FormContainer';

const Form = () => {
  const [redirect, setRedirect] = useState(false);
  const [username, setUsername] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    setRedirect(true);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor="username">
        Github Username
        <br />
        <Input
          id="username"
          type="text"
          placeholder="Ada Lovelace"
          onChange={(event) => setUsername(event.target.value)}
          required
        />
      </Label>
      <Button type="submit">GENERATE</Button>
      {redirect && <Redirect to={`/${username}`} />}
    </FormContainer>
  );
};

export default Form;
