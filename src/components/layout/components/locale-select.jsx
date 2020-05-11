import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { LOCALES, withLocale } from '../../../state/locale';
import { navigate } from 'gatsby';
import { Location } from '@reach/router';

const LocaleSelect = ({
  currentLocale,
  setLocale,
  location,
}) => {
  return (
    <Form.Control
      as="select"
      custom
      value={currentLocale.index}
      onChange={event => {
        const newLocaleIndex = event.target.value;
        const basePath = location.pathname.replace(new RegExp(`^/${currentLocale.prefix}`), '/');
        const newPath = [LOCALES[newLocaleIndex].prefix, basePath].join('/');
        setLocale(newLocaleIndex);
        navigate(newPath);
      }}
    >
      {LOCALES.map(
        (localeData, index) =>
          <option
            key={index}
            value={localeData.index}
          >
            {localeData.name}
          </option>
      )}
    </Form.Control>
  );
};

LocaleSelect.propTypes = {
  currentLocale: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

const LocaleSelectWithLocale = withLocale(LocaleSelect);

export default props =>
  <Location>
    {locationProps =>
      <LocaleSelectWithLocale {...props} {...locationProps} />
    }
  </Location>
;
