import PropTypes from 'prop-types';
import React from 'react';

import Avatar from 'shared/components/Avatar';
import Link from 'shared/components/Link';

import ProfileContainer from './ProfileContainer';
import ProfileInfo from './ProfileInfo';

// eslint-disable-next-line
const Profile = ({ avatarUrl, bio, email, location, name }) => (
  <ProfileContainer>
    <Avatar src={avatarUrl} alt={`${name}`} />
    <ProfileInfo>
      <h2>{name}</h2>
      <p style={{ paddingLeft: '1rem' }}>{location}</p>
      {email && (
        <Link href={`mailto:${email}`} style={{ paddingLeft: '1rem' }}>
          {email}
        </Link>
      )}
      <p style={{ paddingLeft: '0.2rem' }}>{bio}</p>
    </ProfileInfo>
  </ProfileContainer>
);

Profile.propTypes = {
  avatarUrl: PropTypes.string,
  bio: PropTypes.string,
  email: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
};

Profile.defaultProps = {
  avatarUrl: '',
  bio: '',
  email: '',
  location: '',
  name: '',
};

export default Profile;
