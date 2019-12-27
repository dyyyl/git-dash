import PropTypes from 'prop-types';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import GET_USER from 'shared/queries/getUser';

import Frontmatter from './Frontmatter';
import Languages from './Languages';
import Profile from './Profile';

const Document = ({ match }) => {
  const { id } = match.params;

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { login: id },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const {
    avatarUrl,
    bio,
    createdAt,
    email,
    followers,
    location,
    name,
    repositories,
  } = data.user;

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
      <Frontmatter
        createdAt={createdAt}
        followers={followers.nodes.length}
        location={location}
        name={name}
        repositories={repositories.nodes.length}
      />
      <Languages languages={languages} />
    </>
  );
};

Document.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Document;
