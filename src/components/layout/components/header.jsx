import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Container, Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { TransparentNavbar } from '../../../styles';
import { Link } from 'gatsby';
import { Location } from '@reach/router';

const Styles = {
  Header: styled.header`
  `,
};

const NavLink = ({ href, active, children }) =>
  <Link
    to={href}
    className={`nav-link ${active && 'active'}`}
    active={active}
  >
    {children}
  </Link>
;

const NavButtons = [
  { path: '/', caption: 'Home' },
  { path: '/news', caption: 'News' },
  { path: '/gallery', caption: 'Gallery' },
];

const Header = ({ siteTitle, location }) =>
  <Styles.Header>
    <TransparentNavbar bg="dark" variant="dark" expand="md">
      <Link to="/">
        <Navbar.Brand>
          {siteTitle}
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {NavButtons.map(
            (buttonData, index) =>
              <NavLink
                key={index}
                href={buttonData.path}
                active={buttonData.path === location.pathname}
              >
                {buttonData.caption}
              </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </TransparentNavbar>
  </Styles.Header>
;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default props =>
  <Location>
    {locationProps => <Header {...locationProps} {...props} />}
  </Location>
;