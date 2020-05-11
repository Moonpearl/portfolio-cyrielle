import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { LocalizedContent } from '../../localization';

const Styles = {
  FooterContainer: styled.footer`
    padding: 4em;
  `,
};

const Footer = () =>
  <Styles.FooterContainer className="text-light text-center">
    <Container>
      © {new Date().getFullYear()},{` `}
      <LocalizedContent as="span">
        <span locale="en">Built with</span>
        <span locale="fr">Développé avec</span>
      </LocalizedContent>
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      {` `}
      <LocalizedContent as="span">
        <span locale="en">and</span>
        <span locale="fr">et</span>
      </LocalizedContent>
      {` `}
      <a href="https://www.datocms.com/">DatoCMS</a>
    </Container>
  </Styles.FooterContainer>
;

export default Footer;
