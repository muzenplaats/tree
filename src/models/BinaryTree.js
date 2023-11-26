import Tree from './Tree'

export default class BinaryTree extends {
  constructor() {
    super()
    this.name = 'binary-tree'
    // ...
  }

  toString() {
    // ...
  }

  toJSON() {
    const { name } = this
    return { name }
  }
}
