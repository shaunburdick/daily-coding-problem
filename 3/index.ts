export interface JsonNode {
  value: any;
  right?: JsonNode,
  left?: JsonNode
}

export class Node {
  static fromJSON(json: JsonNode): Node {
    return new Node(
      json.value,
      json.left ? Node.fromJSON(json.left) : undefined,
      json.right ? Node.fromJSON(json.right) : undefined
    );
  }

  left?: Node;
  right?: Node;

  constructor(public value: any, left?: Node, right?: Node) {
    if (left) this.left = left;
    if (right) this.right = right;
  }

  toJSON(): JsonNode {
    const node: JsonNode = {
      value: this.value
    };

    if (this.left) node.left = this.left.toJSON();
    if (this.right) node.right = this.right.toJSON();

    return node;
  }
}

export function serializeTree(root: Node): string {
  return JSON.stringify(root.toJSON());
}

export function deserializeTree(serializedRoot: string): Node {
  const jsonRoot: JsonNode = JSON.parse(serializedRoot);
  return Node.fromJSON(jsonRoot);
}