
export default class Node_1D {

  // @param item  AnyType
  constructor(item) {
    this.name = 'node_1d'
    this.item = item
    this.leftNode = null
    this.rightNode = null
  }

  get previousNode() { return this.leftNode }
  set previousNode(node) { this.leftNode = node }

  get nextNode() { return this.rightNode }
  set nextNode(node) { this.rightNode = node }

  // Returns,
  //   [o] (item desc) [o]
  //   [o] (item desc) [>]
  //   [<] (item desc) [o]
  //   [<] (item desc) [>]
  toString() {
    const str = []
    if (this.leftNode) { str.push('[<]') }
    str.push('(' + this.item + ')')
    if (this.rightNode) { str.push('[>]') }
    return str.join(' ')
  }

  toJSON() {
    const { name, item } = this
    return { name, item }
  }
}
