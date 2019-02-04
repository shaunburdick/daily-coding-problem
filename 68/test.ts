import { default as test } from "tape";
import { bishopAttacks } from ".";

test("#68: 'Bishop Attacks", assert => {
  const board1 = [
    ["b", "0", "0", "0", "0"],
    ["0", "0", "b", "0", "0"],
    ["0", "0", "b", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["b", "0", "0", "0", "0"]
  ];

  assert.equals(bishopAttacks(board1), 2, "bishopAttacks(board1)");

  const board2 = [
    ["b", "0", "0", "0", "0", "0", "b", "0"],
    ["0", "0", "b", "0", "0", "b", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "b"],
    ["0", "b", "0", "0", "0", "0", "b", "b"],
    ["0", "0", "0", "0", "0", "0", "b", "0"],
    ["0", "0", "b", "0", "0", "0", "0", "b"],
    ["0", "b", "0", "0", "b", "0", "b", "b"],
    ["b", "0", "0", "0", "0", "0", "0", "0"]
  ];

  assert.equals(bishopAttacks(board2), 12, "bishopAttacks(board2)");

  assert.end();
});
