import { bigTestCode } from 'src/sub1/sub2/bigTestCode';
import { dinamycArray } from './sub1/dinamycArray/dinamycArray';

function main() {
  const biArray = [
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1]
  ];
  console.log('---------- Cool Programing ----------\n');
  smallTestCode();
  bigTestCode();
  dinamycArray(2, biArray);
}

main();

function smallTestCode() {
  console.log('Do some small code');
}
