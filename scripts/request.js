import { request } from "graphql-request";

const endpoint = "https://api.graph.cool/simple/v1/cj7lvqnej074f0168gpa04872";

const mutation = (query) => {
  return request(endpoint, query)
}

export default mutation;