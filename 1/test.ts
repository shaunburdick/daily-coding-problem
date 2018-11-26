import { default as test } from 'tape';
import { containsSum } from '.';

test('#1: containsSum()', (assert) => {
  assert.ok(containsSum([1, 2, 3, 4, 5], 9), 'containsSum([1, 2, 3, 4, 5], 9)');
  assert.ok(!containsSum([1, 2, 3, 4, 5], 0), '!containsSum([1, 2, 3, 4, 5], 0)');
  assert.ok(containsSum([1.2, 6.7, 33.6, -23.9], -22.7), 'containsSum([1.2, 6.7, 33.6, -23.9], -22.7)');

  assert.end();
});