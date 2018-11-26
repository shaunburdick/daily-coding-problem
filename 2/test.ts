import { default as test } from 'tape';
import { sumEveryoneElse } from '.';

test('sumEveryoneElse()', (assert) => {
  assert.deepEqual(sumEveryoneElse([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24], 'sumEveryoneElse([1, 2, 3, 4, 5])');
  assert.deepEqual(sumEveryoneElse([3, 2, 1]), [2, 3, 6], 'sumEveryoneElse([3, 2, 1])');
  assert.deepEqual(sumEveryoneElse([0, 5, 7, 9, 2, 3]), [1890, 0, 0, 0, 0, 0], 'sumEveryoneElse([0, 5, 7, 9, 2, 3]');

  assert.end();
});