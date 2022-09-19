/* eslint-disable no-bitwise */

export function dinamycArray(n: number, queries: number[][]) {
  let lastAnswer = 0;
  const arr: number[][] = [];
  const res: number[] = [];

  for (let i = 0; i < n; i += 1) {
    arr[i] = [];
  }
  console.log('arr', arr);

  for (let i = 0; i < queries.length; i += 1) {
    const x = queries[i][1];
    const y = queries[i][2];
    const idx = (x ^ lastAnswer) % n;

    if (queries[i][0] === 1) {
      arr[idx].push(y);
    } else if (queries[i][0] === 2) {
      lastAnswer = arr[idx][y % arr[idx].length];
      res.push(lastAnswer);
    }
  }
  return res;
}
