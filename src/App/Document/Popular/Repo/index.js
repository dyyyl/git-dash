import PropTypes from 'prop-types';
import React from 'react';

import Link from 'shared/components/Link';

import RepoBody from './RepoBody';
import RepoContainer from './RepoContainer';
import RepoDescription from './RepoDescription';
import RepoTitle from './RepoTitle';
import TitleContainer from './TitleContainer';

const Repo = ({ repo }) => {
  // eslint-disable-next-line
  const { createdAt, description, url, stargazers, forks } = repo;

  const date = new Date(createdAt).toLocaleDateString();
  const stargazersCount = stargazers.totalCount;
  const forksCount = forks.totalCount;

  return (
    <RepoContainer>
      <TitleContainer>
        <RepoTitle>{repo.name}</RepoTitle>
        <p>Created on: {date}</p>
      </TitleContainer>
      {description && <RepoDescription>{description}</RepoDescription>}
      <RepoBody>
        This repository has{' '}
        {stargazersCount >= 100 ? 'over a hundred' : stargazersCount} stars and{' '}
        {forksCount >= 100 ? 'over a hundred' : forksCount} forks. If you would
        like more information about this repository and my contributed code,
        please visit{' '}
        <Link href={url} style={{ fontWeight: 600 }}>
          the repo
        </Link>{' '}
        on GitHub.
      </RepoBody>
    </RepoContainer>
  );
};

Repo.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default Repo;
