// @flow

import { request } from "graphql-request";

const endpoint = "https://api.graph.cool/simple/v1/cj7lvqnej074f0168gpa04872";

const queryBatch = () => {
  const query = `{records: allConferences(first: 100) {id}}`;
  return request(endpoint, query);
};

const deleteBatch = async () => {
  console.log("Fetching new nodes");
  const { records } = await queryBatch();

  if (records && records.length > 0) {
    console.log(`Deleting next batch of ${records.length} members...`);
    const mutations = records.map(
      record => `mutation {deleteConference(id: "${record.id}") {id}}`
    );

    await Promise.all(mutations.map(m => request(endpoint, m)));
    await deleteBatch();
  }
};

const main = async () => {
  // set to true to create test data
  const req = await request(endpoint, `{meta: _allConferencesMeta {count}}`);

  console.log(`Deleting ${req.meta.count} records...`);
  await deleteBatch();

  console.log("Done!");
};

main().catch(e => console.error(e));
