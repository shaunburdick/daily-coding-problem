import { default as test } from 'tape';
import { Node, serializeTree, deserializeTree } from '.';

const fixtures = {
  simple: {
    node: new Node('foo'),
    serialized: '{"value":"foo"}'
  },
  twoDeep: {
    node: new Node('foo', new Node('left'), new Node('right')),
    serialized: '{"value":"foo","left":{"value":"left"},"right":{"value":"right"}}'
  },
  uneven: {
    node: new Node('foo', new Node('left', new Node('left.left')), new Node('right')),
    serialized: '{"value":"foo","left":{"value":"left","left":{"value":"left.left"}},"right":{"value":"right"}}'
  }
};

test('#3: serializeTree()', (assert) => {
  assert.equal(serializeTree(fixtures.simple.node), fixtures.simple.serialized, 'Simple Node');
  assert.equal(serializeTree(fixtures.twoDeep.node), fixtures.twoDeep.serialized, 'Two Deep Node');
  assert.equal(serializeTree(fixtures.uneven.node), fixtures.uneven.serialized, 'Uneven Node');

  assert.end();
});

test('#3: deserializeTree()', (assert) => {
  assert.deepEqual(deserializeTree(fixtures.simple.serialized), fixtures.simple.node, 'Simple Node');
  assert.deepEqual(deserializeTree(fixtures.twoDeep.serialized), fixtures.twoDeep.node, 'Two Deep Node');
  assert.deepEqual(deserializeTree(fixtures.uneven.serialized), fixtures.uneven.node, 'Uneven Node');

  assert.end();
});

test('#3: combo', (assert) => {
  const comboNode = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
  assert.equal((deserializeTree(serializeTree(comboNode)) as any).left.left.value, 'left.left', 'Combo Node');

  assert.end();
});