export class RandomFromStream<T = any> {
  private count = 0;
  private lastRandom: any;

  select(item: T): T {
    this.count++;

    if(this.count === 1) {
      this.lastRandom = item; // take first item, 1/count chance where n = 1
    } else {
      // Select a random number between 1 and count
      const rand = Math.floor(Math.random() * this.count);

      // If rand equals a static value (in this case the last index)
      // then it replaces the last value
      // Chance is 1/count, but the previous value now also has a 1/count chance of being replaced
      // giving it the same odds of being selected as all previous values
      if (rand === this.count - 1) {
        this.lastRandom = item;
      }
    }

    return this.lastRandom;
  }
}