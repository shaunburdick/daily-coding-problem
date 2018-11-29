import { default as test } from 'tape';
import { cons, car, cdr } from '.';

test('#5: cons(),car(),cdr()', (assert) => {
  assert.equal(car(cons(3, 4)), 3, 'car(cons(3, 4))');
  assert.equal(cdr(cons(3, 4)), 4, 'cdr(cons(3, 4))');

  assert.end();
});