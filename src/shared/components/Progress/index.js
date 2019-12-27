import PropTypes from 'prop-types';
import React from 'react';

import ProgressContainer from './ProgressContainer';
import ProgressPercentage from './ProgressPercentage';

const Progress = ({ color, name, percentage }) => (
  <label htmlFor={name} style={{ fontSize: '1.5rem' }}>
    {name} - {percentage}%
    <ProgressContainer id={name}>
      <ProgressPercentage color={color} percentage={percentage} />
    </ProgressContainer>
  </label>
);

Progress.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Progress;
