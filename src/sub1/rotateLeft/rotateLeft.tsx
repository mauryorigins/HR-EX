export function rotateLeft(d: number, arr: number[]): number[] {
  // Write your code here
  for (let i = 0; i < d; i += 1) {
    const element = arr[0];
    arr.shift();
    arr.push(element);
  }
  return arr;
}
