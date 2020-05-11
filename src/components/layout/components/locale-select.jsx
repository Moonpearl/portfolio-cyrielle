import React from 'react';
import PropTypes from 'prop-types';
import { Form, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { LOCALES, withLocale } from '../../../state/locale';
import { navigate } from 'gatsby';
import { Location } from '@reach/router';

const LocaleSelect = ({
  currentLocale,
  setLocale,
  location,
}) => {
  const handleChange = (newLocaleIndex) => () => {
    const basePath = location.pathname.replace(new RegExp(`^/${currentLocale.prefix}`), '/');
    const newPath = [LOCALES[newLocaleIndex].prefix, basePath].join('/');
    setLocale(newLocaleIndex);
    navigate(newPath);
  }

  return (
    <DropdownButton
      as={ButtonGroup}
      size="sm"
      variant="secondary"
      title={currentLocale.name}
      alignRight
      className="mr-2"
    >
      {LOCALES.map(
        locale =>
          <Dropdown.Item
            size="sm"
            key={locale.index}
            onClick={handleChange(locale.index)}
          >
            {locale.name}
          </Dropdown.Item>
      )}
    </DropdownButton>
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
