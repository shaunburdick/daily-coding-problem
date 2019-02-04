export function bishopAttacks(board: Array<string[]>): number {
  let attacks = 0;
  const boardLength = board.length;
  const diagXBishops: number[] = [];
  const diagYBishops: number[] = [];
  for (let x = 0; x < boardLength * 2 - 2; x++) {
    diagXBishops[x] = 0;
    diagYBishops[x] = 0;
  }

  for (let boardX = 0; boardX < boardLength; boardX++) {
    for (let boardY = 0; boardY < boardLength; boardY++) {
      if (board[boardX][boardY] === "b") {
        diagXBishops[boardLength + boardX - boardY - 1]++;
        diagYBishops[boardX + boardY]++;
      }
    }
  }
  attacks += diagXBishops.reduce(
    (atk, bishops) => (bishops > 1 ? atk + bishops - 1 : atk),
    0
  );
  attacks += diagYBishops.reduce(
    (atk, bishops) => (bishops > 1 ? atk + bishops - 1 : atk),
    0
  );

  return attacks;
}
