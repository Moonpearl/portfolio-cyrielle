import React from 'react';
import PropTypes from 'prop-types';
import { smartTruncateText } from '../utils';

const MarkdownTextContainer = ({ textNode, truncate }) => {
  let __html;

  if (truncate) {
    const truncatedHtml = smartTruncateText(textNode.childMarkdownRemark.html);

    if (truncatedHtml !== textNode.childMarkdownRemark.html) {
      const match = truncatedHtml.match(/^<(\w)+>(.+)<\/(\w)+>$/);
      if (match) {
        __html = `<${match[1]}>${match[2]}&hellip;</${match[3]}>`
      } else {
        __html = truncatedHtml + '&hellip;';
      }
    }
  } else {
    __html = textNode.childMarkdownRemark.html;
  }

  return (
    <div dangerouslySetInnerHTML={{ __html }} />
  );
}

MarkdownTextContainer.propTypes = {
  textNode: PropTypes.object.isRequired,
}

export default MarkdownTextContainer;
