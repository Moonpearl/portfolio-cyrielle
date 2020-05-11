import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Location } from '@reach/router';
import { LOCALES, withLocale } from '../../../state/locale';

const LocaleRedirect = ({
  location,
  setLocale,
}) => {
  useEffect(() => {
    let found = false;
    for (let locale of LOCALES.slice(1, LOCALES.length)) {
      const pathArray = location.pathname.split('/');
      if (pathArray[1] === locale.prefix) {
        setLocale(locale.index);
        found = true;
        break;
      }
    }
    if (!found) {
      setLocale(0);
    }
  });

  return null;
}

LocaleRedirect.propTypes = {
  location: PropTypes.object.isRequired,
  setLocale: PropTypes.func.isRequired,
}

const LocaleRedirectWithLocale = withLocale(LocaleRedirect);

export default props =>
  <Location>
    {locationProps =>
      <LocaleRedirectWithLocale {...props} {...locationProps} />
    }
  </Location>
;
