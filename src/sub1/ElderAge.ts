/* eslint-disable no-unused-expressions */
/* eslint-disable no-bitwise */
export function ElderAge(m: number, n: number, l: number, t: number) {
  const magicRectangle = [];

  for (let i = 0; i < n; i += 1) {
    //    console.log('index i', i);
    const newArray = [];
    for (let j = 0; j < m; j += 1) {
      const or = j ^ i;
      newArray.push(or);
    }
    magicRectangle[i] = newArray;
  }

  console.log(l);
  console.log(t);
  //  console.log(magicRectangle);
  let cont = 0;
  const newTimeLife: number[][] = [];
  const time = magicRectangle.forEach((element) => {
    const newAgre: number[] = [];
    element.forEach((life) => {
      let newLife = 0;
      newLife = life - l;
      if (newLife < 0) {
        newAgre.push(0);
      } else {
        newAgre.push(newLife);
        cont += newLife;
      }
    });
    newTimeLife.push(newAgre);
  });
  console.log('newTimeLife', newTimeLife);
  console.log('cont', cont);
  console.log('cont modulo t', cont % t);
  console.log('time', time);
}
