import PropTypes from 'prop-types';
import React from 'react';

import FrontmatterContainer from './FrontmatterContainer';

const Frontmatter = ({
  createdAt,
  followers,
  location,
  name,
  repositories,
}) => {
  const date = new Date(createdAt).toLocaleDateString();

  return (
    <FrontmatterContainer>
      <p style={{ fontSize: '1.45rem' }}>
        On Github since {date}, {name} is a developer{' '}
        {location && `living in ${location}`} with{' '}
        {repositories >= 100 ? 'over a hundred' : repositories} public
        repositories and {followers >= 100 ? 'over a hundred' : followers}{' '}
        followers.
      </p>
    </FrontmatterContainer>
  );
};

Frontmatter.propTypes = {
  createdAt: PropTypes.string.isRequired,
  followers: PropTypes.number,
  location: PropTypes.string,
  name: PropTypes.string,
  repositories: PropTypes.number,
};

Frontmatter.defaultProps = {
  followers: 0,
  location: 'Somewhere',
  name: 'USER',
  repositories: 0,
};

export default Frontmatter;
