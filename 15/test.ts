import { default as test } from 'tape';
import { RandomFromStream } from '.';

test('#15: RandomFromStream', (assert) => {
  const stream = [1,2,3,4,5,6,7,8,9,0];
  const selector = new RandomFromStream<number>();

  for (let x = 0; x < stream.length; x++) {
    const randomItem = selector.select(stream[x]);
    assert.ok(stream.slice(0, x+1).includes(randomItem), `${randomItem} was selected`);
  }

  assert.end();
});