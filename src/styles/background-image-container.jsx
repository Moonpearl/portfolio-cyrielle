import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const BackgroundImageContainer = styled.div`
  ${ ({ imageUrl }) => css`
    background-image: url(${imageUrl});
  `}
  background-size: cover;
  background-repeat: none;
  ${ ({ attachmentFixed }) => attachmentFixed && css`
    background-attachment: fixed;
  `}
`;

BackgroundImageContainer.propTypes = {
  imageUrl: PropTypes.string.isRequired,
}

export default BackgroundImageContainer;
