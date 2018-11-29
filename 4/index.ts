export function findMissingInteger(arr: number[]): number {
  const sortedPositive = arr
    .filter((num) => num > -1) // filter out negative numbers
    .sort((a,b) => a - b); // sort numerically


  let expected = sortedPositive[0];
  for (const currentNum of sortedPositive) {
    if (currentNum === expected) {
      expected++;
    } else {
      return expected;
    }
  }

  return expected;
}