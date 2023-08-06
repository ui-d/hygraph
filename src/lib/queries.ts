import { gql } from 'graphql-request';

const pageData = gql`
  query pageData($slug: String!) {
    page(where: { slug: $slug }) {
      sections {
        ... on Section {
          id
          blocks {
            components {
              __typename
              ... on Callout {
                id
                title
                description
                actionButton {
                  id
                  size
                  text
                }
              }
              ... on FeatureSection {
                id
                label
                title
                description
                media {
                  ... on Image {
                    id
                    image {
                      url
                    }
                  }
                  ... on YoutubeVideo {
                    id
                    link
                  }
                }
                reversed
                featureActionButton: actionButton {
                  id
                  size
                  text
                }
              }
              ... on Hero {
                id
                title
                description
                actionButtons {
                  ... on Button {
                    id
                    size
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const pagesSlugs = gql`
  {
    pages {
      slug
    }
  }
`;

const pageMeta = gql`
  query pageMeta($slug: String!) {
    page(where: { slug: $slug }) {
      seo {
        title
        description
      }
    }
  }
`;

export { pageData, pageMeta, pagesSlugs };
