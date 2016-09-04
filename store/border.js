export default class Border {
  constructor (id, { name = '', x = 0, width = 6, hidden = false }) {
    this.id = id
    this.name = name
    this.x = x
    this.hidden = false
    this.width = width
  }

  toString () {
    return this.id
  }
}
