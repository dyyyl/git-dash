import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import Container from 'shared/components/Container';
import GET_USER from 'shared/queries/getUser';

import Frontmatter from './Frontmatter';
import Languages from './Languages';
import Popular from './Popular';
import Profile from './Profile';

const Document = () => {
  const { id } = useParams();

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
        followers={followers.totalCount}
        location={location}
        name={name}
        repositories={repositories.totalCount}
      />
      <Container>
        <Languages languages={languages} />
        <Popular repositories={repositories} />
      </Container>
    </>
  );
};

export default Document;
