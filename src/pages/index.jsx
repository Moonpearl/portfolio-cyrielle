import React from 'react';
import { Layout, SEO, MarkdownTextContainer, Section } from '../components';
import { Jumbotron, Container } from 'react-bootstrap';

const IndexPage = ({ data }) => {
  const { datoCmsAboutPage: about } = data;

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Jumbotron>
          <MarkdownTextContainer textNode={about.bioNode} />
        </Jumbotron>
      </Container>
      {about.sections.map(
        (sectionNode, index) => <Section key={index} {...sectionNode} inverted={index % 2 === 0} />
      )}
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    datoCmsAboutPage {
      sections {
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
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
