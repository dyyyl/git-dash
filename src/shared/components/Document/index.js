import PropTypes from 'prop-types';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import GET_USER from 'shared/queries/getUser';

const Document = ({ searchName }) => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { login: searchName },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data);

  return <h1>POO</h1>;
};

Document.propTypes = {
  searchName: PropTypes.string.isRequired,
};

export default Document;
