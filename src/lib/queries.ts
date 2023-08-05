import { gql } from 'graphql-request';

const pageQuery = gql`
  query Page($slug: String!) {
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

const pagesSlugsQuery = gql`
  {
    pages {
      slug
    }
  }
`;

export { pageQuery, pagesSlugsQuery };
