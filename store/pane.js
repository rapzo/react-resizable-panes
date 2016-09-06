export default class Pane {
  constructor (id, { name = '', width = 0, selected = false, hidden = false, border = true }) {
    this.id = id
    this.name = name
    this.width = width
    this.selected = selected
    this.hidden = hidden
    this.hover = false
    this.border = border
  }

  toString () {
    return this.id
  }
}
