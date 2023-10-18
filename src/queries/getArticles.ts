import { request, gql } from "graphql-request";

type Article = {
  collection_id: string;
  description: string;
  image: string;
  published_timestamp: string;
  title: string;
  url: string;
};

type Articles = {
  articledatacollection: {
    articles: [Article];
  };
};

const endpoint = import.meta.env.HYGRAPH_ENDPOINT;

const query = gql`
  query Articles($username: String!, $collection_id: Int!, $per_page: Int!) {
    articledatacollection(username: $username, collection_id: $collection_id, per_page: $per_page) {
      articles {
        collection_id
        description
        image
        published_timestamp
        title
        url
      }
    }
  }
`;

const variables = {
  username: "timbenniks",
  collection_id: 22300,
  per_page: 5,
};

export default async function () {
  const { articledatacollection } = await request<Articles>(
    endpoint,
    query,
    variables
  );

  return articledatacollection.articles
}

