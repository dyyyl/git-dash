import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from 'shared/components/Button';
import Input from 'shared/components/Input';
import Label from 'shared/components/Label';

import FormContainer from './FormContainer';

const Form = ({ setIsQueriable, setSearchedName }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchedName(username);
    setIsQueriable(true);
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
    </FormContainer>
  );
};

Form.propTypes = {
  setIsQueriable: PropTypes.func.isRequired,
  setSearchedName: PropTypes.func.isRequired,
};

export default Form;
