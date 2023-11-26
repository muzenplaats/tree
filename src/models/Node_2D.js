
export default class Node_2D {

  /**
   * @param item  AnyType
   **/
  constructor(item) {
    this.name = 'node_2d'
    this.item = item

    this.leftNode = null  // in space
    this.rightNode = null
    this.upperNode = null
    this.lowerNode = null
  }

/*
  get previousNode() { return this.leftNode }  // in time
  set previousNode(node) { this.leftNode = node }

  get nextNode() { return this.rightNode }
  set nextNode(node) { this.rightNode = node }
*/

  // Returns, (pass
  // [o] (item desc) [o]
  // [<] ... [>]
  // [^] ...
  // [<^] (item desc) [v>]  // means as below,
  // upper up          lower down   direction
  // north west        south east   location
  toString() {
    const str = []
    // Todo,
    /*
    if (this.leftNode) { str.push('[<]') }
    str.push('(' + this.item + ')')
    if (this.rightNode) { str.push('[>]') }
    */
    return str.join(' ')
  }

  toJSON() {
    const { name, item } = this
    return { name, item }
  }
}
