import React from 'react';
import PropTypes from 'prop-types';
import { withLocale } from '../../state/locale';
import { Link } from 'gatsby';

const LocalizedLink = ({
  currentLocale,
  to, 
  children
}) => {
  const path = [
    '',
    currentLocale.prefix,
    ...to.split('/').filter(item => item !== '')
  ].join('/');

  return (
    <Link to={path}>
      {children}
    </Link>
  );
}

LocalizedLink.propTypes = {
  currentLocale: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default withLocale(LocalizedLink);
