interface XORNode<T = any> {
  value: T;
  both: number;
}

export class XORList<T = any> {

  private root: number = 0;
  private heap: { [address: number]: XORNode<T> } = {};

  add(value: T): XORNode<T> {
    const index = this.getFreeIndex();
    if (this.root === 0) {
      this.heap[index] = {
        value,
        both: 0
      };
      this.root = index;
    } else {
      const lastNode = this.getLast();
      this.heap[index] = {
        value,
        both: lastNode.address
      };
      lastNode.node.both = lastNode.node.both ^ index;
    }

    return this.heap[index];
  }

  get(index: number): XORNode<T> {
    if (index === 0) return this.heap[this.root];

    let currentNode = this.heap[this.root];
    let lastAddress = 0;
    let nextAddress = currentNode.both;
    for (let curIndex = index; curIndex > 0; curIndex--) {
      currentNode = this.heap[nextAddress];
      lastAddress = nextAddress;
      nextAddress = currentNode.both ^ lastAddress;
    }

    return currentNode;
  }

  private getLast(): { address: number, node: XORNode<T> } {
    if (this.root === 0) throw new Error('List is empty');
    let currentNode = this.heap[this.root];
    let lastAddress = 0;
    let nextAddress = currentNode.both;
    while (nextAddress) {
      currentNode = this.heap[nextAddress];
      lastAddress = nextAddress;
      nextAddress = currentNode.both ^ lastAddress;
    }

    return { address: lastAddress, node: currentNode };
  }

  private getFreeIndex(): number {
    let index;

    while(!index) {
      const possibleIndex = Math.ceil(Math.random() * 100000);
      if (!this.heap[possibleIndex]) index = possibleIndex;
    }

    return index;
  }
}