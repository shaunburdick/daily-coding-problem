export function containsSum(arr: number[], sum: number): boolean {
  const otherNumbers = new Set<number>();

  for (let num of arr) {
    if (otherNumbers.has(num)) return true;
    else otherNumbers.add(sum - num);
  };

  return false;
}