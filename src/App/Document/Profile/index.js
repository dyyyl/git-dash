import PropTypes from 'prop-types';
import React from 'react';

import Avatar from 'shared/components/Avatar';
import Link from 'shared/components/Link';

import Bio from './Bio';
import Location from './Location';
import Name from './Name';
import ProfileContainer from './ProfileContainer';
import ProfileInfo from './ProfileInfo';

// eslint-disable-next-line
const Profile = ({ avatarUrl, bio, email, location, name }) => (
  <ProfileContainer>
    <Avatar src={avatarUrl} alt={`${name}`} />
    <ProfileInfo>
      <Name>{name}</Name>
      <Location>{location}</Location>
      {email && (
        <Link href={`mailto:${email}`} style={{ paddingLeft: '1rem' }}>
          {email}
        </Link>
      )}
      <Bio>{bio}</Bio>
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
