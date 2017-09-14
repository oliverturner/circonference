// @flow

import writeFile from "write";
import { getChunkedRows } from "./utils";

import data from "./conferences.json"
import mutation from "./conferences";

const chunkNum = 50;

process.env.TZ = "UTC";

const onError = err => console.log(err);

const sendChunk = async chunk => {
  return await Promise.all(chunk.map(mutation));
};

const sendChunks = async (arr, final) => {
  return await arr.reduce((promise, item) => {
    return promise
      .then(() => {
        console.log(final.length)
        return sendChunk(item).then(result => final.push(result));
      })
      .catch(console.error);
  }, Promise.resolve());
};

const createRecords = async (records) => {
  const chunks = getChunkedRows(data, chunkNum);
  await sendChunks(chunks, records);

  return records;
};

const init = async () => {
  const dest = `./__fixtures__/simple/conferences.json`;
  const ids = await createRecords([]);

  writeFile(dest, JSON.stringify(ids, null, 2), onError);

  console.log(`Created ${ids.reduce((n, x) => n + x.length, 0)} records`);
};

init().catch(e => console.error(e));
