import PropTypes from 'prop-types';
import React from 'react';

import Container from 'shared/components/Container';

import Repo from './Repo';

const Popular = ({ repositories }) => {
  const popularRepositories = [
    repositories.nodes[0],
    repositories.nodes[1],
    repositories.nodes[2],
  ];

  return (
    <Container style={{ marginTop: '7.5rem' }}>
      <h3>Popular Repositories</h3>
      {popularRepositories.map((repo) => (
        <Repo repo={repo} key={repo.id} />
      ))}
    </Container>
  );
};

Popular.propTypes = {
  repositories: PropTypes.object.isRequired,
};

export default Popular;
