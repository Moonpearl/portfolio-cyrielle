import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () =>
  <footer className="text-light">
    <Container>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      {` `}
      and
      {` `}
      <a href="https://www.datocms.com/">DatoCMS</a>
    </Container>
  </footer>
;

export default Footer;
