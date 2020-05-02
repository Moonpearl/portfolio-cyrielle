import React from 'react';
import { Layout, SEO, MarkdownTextContainer, Section, BackgroundCarousel } from '../components';
import { Jumbotron, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = {
  TransparentJumbotron: styled(Jumbotron)`
    opacity: .9;
  `,
}

const IndexPage = ({ data }) => {
  const { datoCmsPage: page } = data;

  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundCarousel pictures={page.homeCarousel.map(picture => picture.url)}>
        <Container>
          <Styles.TransparentJumbotron>
            <MarkdownTextContainer textNode={page.homeDescriptionNode} />
          </Styles.TransparentJumbotron>
        </Container>
      </BackgroundCarousel>
      {page.homeSections.map(
        (sectionNode, index) => <Section key={index} {...sectionNode} inverted={index % 2 === 0} />
      )}
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    datoCmsPage {
      homeCarousel {
        url
      }
      homeSections {
        title
        slug
        backgroundColor {
          red
          blue
          green
        }
        backgroundImage {
          url
        }
        textColor {
          blue
          green
          red
        }
        descriptionNode {
          childMarkdownRemark {
            html
          }
        }
      }
      homeDescriptionNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
