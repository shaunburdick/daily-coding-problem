import { default as test } from 'tape';
import { findMissingInteger } from '.';

test('#4: findMissingInteger()', (assert) => {
  assert.equal(findMissingInteger([3, 4, -1, 1]), 2, 'findMissingInteger([3, 4, -1, 1])');
  assert.equal(findMissingInteger([1, 2, 0]), 3, 'findMissingInteger([1, 2, 0])');
  assert.equal(findMissingInteger([7, 3, 6, 0, -1, 4, 2, 17, 32, 5, 1]), 8, 'findMissingInteger([7, 3, 6, 0, -1, 4, 2, 17, 32, 5, 1]');
  assert.equal(findMissingInteger([1, 2, 3, 4, 5]), 6, 'findMissingInteger([1, 2, 3, 4, 5]');

  assert.end();
});