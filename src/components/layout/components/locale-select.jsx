import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { LOCALES, withLocale } from '../../../state/locale';
import { Location } from '@reach/router';

const LocaleSelect = ({
  currentLocale,
  setLocale,
  checkLocale,
  location,
}) => {
  useEffect(() => {
    checkLocale(location.pathname);
  });

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
            onClick={() => setLocale(locale.index, location.pathname)}
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
