import { gql } from 'graphql-request';

const pageQuery = gql`
  query Page($slug: String!) {
    page(where: { slug: $slug }) {
      sections {
        ... on Section {
          id
          block {
            id
            components {
              __typename
              ... on Callout {
                id
                title
                stage
              }
              ... on FeatureSection {
                id
                title
              }
              ... on Hero {
                id
                title
              }
            }
          }
        }
      }
    }
  }
`;

const pagesSlugsQuery = gql`
  {
    pages {
      slug
    }
  }
`;

export { pageQuery, pagesSlugsQuery };
