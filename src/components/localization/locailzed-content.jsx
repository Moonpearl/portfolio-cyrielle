import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { withLocale } from "../../state/locale";

const LocalizedContent = ({
  children,
  currentLocale,
  as: Component
}) =>
  <Component>
    {Children.toArray(children).filter(
      ({ props }) => typeof props.locale === 'undefined' || props.locale === currentLocale.code
    )}
  </Component>
;

LocalizedContent.propTypes = {
  children: PropTypes.node.isRequired,
  currentLocale: PropTypes.string.isRequired,
};

LocalizedContent.defaultProps = {
  as: 'div',
}

export default withLocale(LocalizedContent);
