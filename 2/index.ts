export function sumEveryoneElse(input: number[]): number[] {
  const resultSum: number[] = [];

  const reducer = (skipIndex: number) =>
    (previous: number, current: number, index: number) => index === skipIndex ? previous : previous * current;

  input.forEach((val, index) => {
    resultSum.push(input.reduce(reducer(index), 1));
  });

  return resultSum;
}