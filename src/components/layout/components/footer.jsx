import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = {
  FooterContainer: styled.footer`
    padding: 4em;
  `,
};

const Footer = () =>
  <Styles.FooterContainer className="text-light text-center">
    <Container>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      {` `}
      and
      {` `}
      <a href="https://www.datocms.com/">DatoCMS</a>
    </Container>
  </Styles.FooterContainer>
;

export default Footer;
