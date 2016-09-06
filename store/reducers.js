import {
  HIDE_LEFT,
  HIDE_RIGHT
  RESIZE
} from './actions'

export default (action) => ({
  [HIDE_LEFT]: (items) => {
    const left = items[0]
    const border = items[1]
    const right = items[2]

    if (!left.hidden) {
      left.hidden = true
      border.hidden = true
      right.width += left.width + border.width

    } else {
      left.hidden = false
      border.hidden = false
      right.width -= left.width + border.width
    }

    return {
      width: right.width
    }
  },

  [HIDE_RIGHT]: (items) => {
    const left = items[items.length - 3]
    const border = items[items.length - 2]
    const right = items[items.length - 1]

    if (!right.hidden) {
      right.hidden = true
      border.hidden = true
      left.width += right.width + border.width
    } else {
      right.hidden = false
      border.hidden = false
      left.width -= right.width + border.width
    }

    return {
      width: left.width
    }
  },

  [RESIZE]: (items, payload) => {
    const left = items[payload.id - 1]
    const right = items[payload.id + 1]
    const border = items[payload.id]

    const offset = payload.offset - items
      .slice(0, payload.id)
      .reduce((offset, item) => offset += item.width, 0)

    left.width += offset
    right.width -= offset
  }
})
