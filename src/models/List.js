
export default class List {
  constructor(args) {
    this.name = 'list'
    // this. ...
  }

  toString() {}

  toJSON() {
    const { name } = this
    return { name }
  }
}
