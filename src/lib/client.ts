import { GraphQLClient } from 'graphql-request';

const hygraphClient = (preview = false) => {
  const endpoint = process.env.HYGRAPH_ENDPOINT;
  if (!endpoint) {
    throw new Error(
      'The HYGRAPH_ENDPOINT environment variable is not defined!'
    );
  }

  return new GraphQLClient(endpoint, {
    headers: {
      ...(process.env.GRAPHCMS_TOKEN && {
        Authorization: `Bearer ${
          preview
            ? process.env.GRAPHCMS_PREVIEW_TOKEN
            : process.env.GRAPHCMS_TOKEN
        }`,
      }),
    },
  });
};

export { hygraphClient };
