import { Dispatcher } from 'flux'
import Pane from './pane'
import Row from './row'
import { HIDE_LEFT, HIDE_RIGHT, RESIZE } from './actions'

export const RowStore = (setup) => {
  const store = new Row([
    new Pane(0, { name: 'left', width: setup.pane, border: false }),
    new Pane(1, { name: 'main', width: setup.pane }),
    new Pane(2, { name: 'right', width: setup.pane })
  ])

  const limit = {
    low: setup.width * 0.1,
    high: setup.width * 0.7
  }

  const actions = (action) => {
    const { type, payload } = action
    let left
    let right

    switch (type) {
      case HIDE_LEFT:
        left = store.items[0]
        right = store.items[1]

        if (!left.hidden) {
          left.hidden = true
          right.width += left.width
          right.border = false
        } else {
          left.hidden = false
          right.border = true
          right.width -= left.width
        }

        store.trigger([{
          id: left.id,
          hidden: left.hidden
        }, {
          id: right.id,
          width: right.width
        }])

        return

      case HIDE_RIGHT:
        right = store.items[store.items.length - 1]
        left = store.items[store.items.length - 2]

        if (!right.hidden) {
          right.hidden = true
          left.width += right.width
        } else {
          right.hidden = false
          left.width -= right.width
        }

        store.trigger([{
          id: left.id,
          width: left.width
        }, {
          id: right.id,
          hidden: right.hidden
        }])

        return

      case RESIZE:
        left = store.items[payload.id - 1]
        right = store.items[payload.id]

        let offset = payload.offset - store.items
          .slice(0, payload.id)
          .reduce((o, item) => o += item.width, 0)

        if (left.width + offset <= limit.low || left.width + offset >= limit.high) return
        if (right.width - offset <= limit.low || right.width - offset >= limit.high) return

        left.width += offset
        right.width -= offset

        store.trigger([{
          id: left.id,
          width: left.width
        }, {
          id: right.id,
          width: right.width
        }])

        return
      default:
        return
    }
  }

  const dispatcher = new Dispatcher()

  dispatcher.register(actions)

  return {
    dispatcher,

    store
  }
}
