import PropTypes from 'prop-types';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import GET_USER from 'shared/queries/getUser';

import Languages from './Languages';
import Profile from './Profile';

const Document = ({ searchedName }) => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { login: searchedName },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  // eslint-disable-next-line
  const { avatarUrl, bio, email, location, name, repositories } = data.user;

  const languages = repositories.nodes.reduce(
    (acc, cur) => acc.concat(cur.languages.nodes),
    [],
  );

  return (
    <>
      <Profile
        avatarUrl={avatarUrl}
        bio={bio}
        email={email}
        location={location}
        name={name}
      />
      <Languages languages={languages} />
    </>
  );
};

Document.propTypes = {
  searchedName: PropTypes.string.isRequired,
};

export default Document;
