import PropTypes from 'prop-types';
import React from 'react';

import Progress from 'shared/components/Progress';

import LanguageContainer from './LanguageContainer';

const Languages = ({ languages }) => {
  const individualUserLanguages = languages.reduce(
    (acc, cur) => ({
      ...acc,
      [cur.name]: { name: cur.name, color: cur.color, id: cur.id },
    }),
    {},
  );

  const userLanguagesCount = languages.reduce((object, language) => {
    if (object[language.name]) {
      return { ...object, [language.name]: object[language.name] + 1 };
    }
    return { ...object, [language.name]: 1 };
  }, {});

  const userLanguagesPercentage = Object.entries(userLanguagesCount).reduce(
    (object, [language, count]) => {
      const percentage = Math.floor((count / languages.length) * 100);
      return {
        ...object,
        [language]: percentage,
      };
    },
    {},
  );

  const userLanguages = Object.entries(individualUserLanguages).map(
    ([language, fields]) => ({
      name: language,
      color: fields.color,
      id: fields.id,
      percentage: userLanguagesPercentage[language],
    }),
  );

  return (
    <div style={{ minWidth: '50vw', marginTop: '5vh' }}>
      <h3>Languages</h3>
      <LanguageContainer>
        {userLanguages
          .sort((a, b) => b.percentage - a.percentage)
          .map((language) => (
            <Progress
              key={language.id}
              color={language.color}
              name={language.name}
              percentage={language.percentage}
            />
          ))}
      </LanguageContainer>
    </div>
  );
};

Languages.propTypes = {
  languages: PropTypes.array,
};

Languages.defaultProps = {
  languages: [],
};

export default Languages;
