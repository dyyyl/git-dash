import PropTypes from 'prop-types';
import React from 'react';

const Frontmatter = ({
  createdAt,
  followers,
  location,
  name,
  repositories,
}) => {
  const date = new Date(createdAt).toLocaleDateString();

  return (
    <div style={{ margin: '4rem 10vw 0 10vw' }}>
      <p style={{ fontSize: '1.45rem' }}>
        On Github since {date}, {name} is a developer based in {location} with{' '}
        {repositories >= 100 ? 'over a hundred' : repositories} public
        repositories and {followers >= 100 ? 'over a hundred' : followers}{' '}
        followers.
      </p>
    </div>
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
