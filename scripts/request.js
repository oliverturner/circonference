import { request } from "graphql-request";

const endpoint = "https://api.graph.cool/simple/v1/cj7kroetv02vm0178ezeps6qf";

const mutation = (query) => {
  return request(endpoint, `mutation {${query}}`)
}

export default mutation;