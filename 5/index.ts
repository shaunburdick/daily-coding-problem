export type Pair = (f: (a: number, b: number) => any) => any;

export function cons(a: number, b: number): Pair {
  return f => f(a,b);
}

export function car(pair: Pair): any {
  return pair((a, b) => a);
}

export function cdr(pair: Pair): any {
  return pair((a, b) => b);
}