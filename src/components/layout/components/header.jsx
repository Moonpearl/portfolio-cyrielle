import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { TransparentNavbar } from '../../../styles';
import { Link, useStaticQuery } from 'gatsby';
import { Location } from '@reach/router';
import ConditionalLink from '../../conditional-link';
import { FaInstagram, FaDiscord, FaTwitter, FaFacebookSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Styles = {
  Header: styled.header`
  `,
  SocialLink: styled(ConditionalLink)`
    margin: -1rem 0 -.5rem;
    font-size: 1.75rem;
  `,
};

const NavButtons = [
  { path: '/', caption: 'Home' },
  { path: '/news', caption: 'News' },
  { path: '/gallery', caption: 'Gallery' },
];

const NavLink = ({ href, active, children }) =>
  <Link
    to={href}
    className={`nav-link ${active && 'active'}`}
  >
    {children}
  </Link>
;

const SocialLinks = () => {
  const data = useStaticQuery(graphql`
    query SocialLinksQuery {
      datoCmsPage {
        socialFacebook
        socialTwitter
        socialInstagram
        socialDiscord
        socialEmail
      }
    }
  `);

  const {
    socialFacebook: facebook,
    socialTwitter: twitter,
    socialInstagram: instagram,
    socialDiscord: discord,
    socialEmail: email,
  } = data.datoCmsPage;

  const linksData = [
    { href: facebook, Icon: FaFacebookSquare },
    { href: twitter, Icon: FaTwitter },
    { href: instagram, Icon: FaInstagram },
    { href: discord, Icon: FaDiscord },
    { href: `mailto:${email}`, Icon: MdEmail },
  ];

  return (
    <Nav as="ul">
      {linksData.map(
        ({ href, Icon }, index) =>
          <Styles.SocialLink
            key={index}
            href={href}
            className="nav-link"
          >
            <Icon />
          </Styles.SocialLink>
      )}
    </Nav>
  )
}

const Header = ({
  siteTitle,
  location,
}) =>
  <Styles.Header>
    <TransparentNavbar bg="dark" variant="dark" expand="md">
      <Link to="/">
        <Navbar.Brand>
          {siteTitle}
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" as="ul">
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
        <SocialLinks />
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
