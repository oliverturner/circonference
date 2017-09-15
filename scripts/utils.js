export const getRange = (i, n) => [i * n, i * n + n];

/**
 * Split an array into sub-arrays of chunkNum length
 * @param {*} arr 
 * @param {*} chunkNum 
 */
export const getChunkedRows = (arr, chunkNum) => {
  const n = Math.ceil(arr.length / chunkNum);

  return Array.from({ length: n }, (_, i) =>
    arr.slice(...getRange(i, chunkNum))
  );
};