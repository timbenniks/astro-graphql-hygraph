import { request } from "graphql-request";
import { graphql } from "../../gql"

const endpoint = import.meta.env.HYGRAPH_ENDPOINT;

const query = graphql(`
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
`);

const variables = {
  username: "timbenniks",
  collection_id: 22300,
  per_page: 5,
};

export default async function () {
  const { articledatacollection } = await request(
    endpoint,
    query,
    variables
  );

  return articledatacollection?.articles
}

