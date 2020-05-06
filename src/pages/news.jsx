import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SEO, HeaderBanner, ArticleCard } from '../components';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = {
  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
    gap: 2rem;
    grid-auto-flow: dense;
    padding: 2rem 0;
  `,
}

const NewsPage = ({ data }) => {
  const { datoCmsPage: page, allDatoCmsArticle: articles } = data;

  return (
    <Layout>
      <SEO title="News" />
      <HeaderBanner
        imageUrl={page.newsBanner.url}
        title="News"
      />
      <Container>
        <Styles.Grid>
          {articles.edges.map(
            (edge, index) =>
            <ArticleCard
              key={index}
              {...edge.node}
            />
          )}
        </Styles.Grid>
      </Container>
    </Layout>
  );
}

export default NewsPage;

export const query = graphql`
  query NewsQuery {
    datoCmsPage {
      newsBanner {
        url
      }
    }
    allDatoCmsArticle(sort: {fields: meta___firstPublishedAt, order: DESC}) {
      edges {
        node {
          slug
          title
          contentNode {
            childMarkdownRemark {
              html
            }
          }
          artwork {
            image {
              fluid {
                src
              }
            }
          }
          meta {
            firstPublishedAt
          }
        }
      }
    }
  }
`;
