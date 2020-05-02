import React from 'react';
import PropTypes from 'prop-types';
import { BackgroundImageContainer } from '../styles';
import styled from 'styled-components';

const Styles = {
  Header: styled.h1`
    padding: 6rem 0;
    color: white;
    text-align: center;
  `,
  Overlay: styled.div`
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    opacity: .75;
  `,
};

const HeaderBanner = ({ imageUrl, title }) =>
  <BackgroundImageContainer imageUrl={imageUrl} attachmentFixed>
    <Styles.Overlay className="bg-dark" />
    <Styles.Header>{title}</Styles.Header>
  </BackgroundImageContainer>
;

HeaderBanner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HeaderBanner;
