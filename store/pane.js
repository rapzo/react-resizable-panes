export default class Pane {
  constructor (id, { name = '', width = 0, selected = false, hidden = false }) {
    this.id = id
    this.name = name
    this.width = width
    this.selected = selected
    this.hidden = hidden
    this.hover = false
  }

  toString () {
    return id
  }
}
