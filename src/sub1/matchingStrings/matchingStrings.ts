function matchingStrings(stringList: string[], queries: string[]): number[] {
  // Write your code here
  const total: number[] = [];
  for (let j = 0; j < queries.length; j += 1) {
    const query = queries[j];
    let cont = 0;
    for (let i = 0; i < stringList.length; i += 1) {
      const element = stringList[i];
      if (query === element) {
        cont += 1;
      }
    }
    total.push(cont);
  }
  return total;
}

matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']);
