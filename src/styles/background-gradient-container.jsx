import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const BackgroundGradientContainer = styled.div`
  ${ ({ startColor, endColor, vague, offset: _offset }) =>
    css`background-image: linear-gradient(to right, ${startColor} ${50 + _offset - vague / 2}%, ${endColor} ${50 + _offset + vague / 2}%);`
  }
`;

BackgroundGradientContainer.propTypes = {
  startColor: PropTypes.string.isRequired,
  endColor: PropTypes.string.isRequired,
  vague: PropTypes.number,
  offset: PropTypes.number,
}

BackgroundGradientContainer.defaultProps = {
  vague: 100,
  offset: 0,
}

export default BackgroundGradientContainer;
