
export default class List {
  constructor(args) {
    this.name = 'list'
    // ...
  }

  toString() {}

  toJSON() {
    const { name } = this
    return { name }
  }
}
