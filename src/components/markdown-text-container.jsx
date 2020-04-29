import React from 'react';
import PropTypes from 'prop-types';

const MarkdownTextContainer = ({ textNode }) =>
  <div dangerouslySetInnerHTML={{ __html: textNode.childMarkdownRemark.html }} />
;

MarkdownTextContainer.propTypes = {
  textNode: PropTypes.object.isRequired,
}

export default MarkdownTextContainer;
