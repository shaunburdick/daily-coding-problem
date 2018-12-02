import { default as test } from 'tape';
import { XORList } from '.';

test('#6: XORList', (assert) => {
  const list = new XORList();

  assert.equal(list.add('foo').value, 'foo', 'Should add foo to list');
  assert.equal(list.get(0).value, 'foo', 'Should get foo from the start of the list');

  list.add('bar');
  assert.equal(list.get(1).value, 'bar', 'Should get bar off the end of the list');

  assert.end();
});