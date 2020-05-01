import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const BackgroundImageContainer = styled.div`
  position: relative;
  z-index: 100;
  background-image:
    url(${ ({ imageUrl }) => imageUrl})
  ;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${ ({ attachmentFixed }) => attachmentFixed && css`
    background-attachment: fixed;
  `}
`;

BackgroundImageContainer.propTypes = {
  imageUrl: PropTypes.string.isRequired,
}

export default BackgroundImageContainer;
