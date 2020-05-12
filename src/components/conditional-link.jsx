import React from 'react';
import PropTypes from 'prop-types';

const ConditionalLink = (props) => {
  const { href, children } = props;

  if (!href) {
    return null;
  }

  return (
    <a href={href} target="_blank" {...props}>
      {children}
    </a>
  );
}

ConditionalLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ConditionalLink;
