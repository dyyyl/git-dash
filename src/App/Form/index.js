import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Button from 'shared/components/Button';
import Input from 'shared/components/Input';
import Label from 'shared/components/Label';

import validateForm from 'shared/libs/validateForm';

import FormContainer from './FormContainer';

const Form = () => {
  const [loginId, setLoginId] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [username, setUsername] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm(username)) {
      alert('Please enter a valid username'); // eslint-disable-line
      return;
    }

    setLoginId(username);

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
      <Button type="submit" disabled={!validateForm(username)}>
        GENERATE
      </Button>
      {redirect && <Redirect to={`/${loginId}`} />}
    </FormContainer>
  );
};

export default Form;
