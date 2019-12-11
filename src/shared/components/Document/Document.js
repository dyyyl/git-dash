import PropTypes from 'prop-types';
import React from 'react';

const Document = ({ userData }) => (
  <>
    <h1>{userData.name}</h1>
  </>
);

Document.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default Document;
