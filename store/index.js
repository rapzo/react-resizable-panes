import { Dispatcher } from 'flux'
import { EventEmitter } from 'events'
import Pane from './pane'
import Border from './border'
import { HIDE_LEFT, HIDE_RIGHT, RESIZE } from './actions'

class RowStore extends EventEmitter {
  constructor (items) {
    super()

    this.items = items
  }

  getItems () {
    return this.items
  }

  trigger (e, payload) {
    this.emit(e, payload)
  }

  addTrigger (e, callback) {
    this.on(e, callback)
  }

  removeTrigger (e, cb) {
    this.removeListener(e, cb)
  }
}

export const store = (setup) => {
  const stores = setup.rows.map((row) => new RowStore([
    new Pane(0, { name: 'left', width: setup.size.pane }),
    new Border(1, { name: 'left', width: setup.size.border }),
    new Pane(2, { name: 'main', width: setup.size.pane }),
    new Border(3, { name: 'right', width: setup.size.border }),
    new Pane(4, { name: 'right', width: setup.size.pane })
  ]))

  const actions = (action) => {
    const { type, payload } = action
    const { items } = stores[0]
    let left, right, main, border

    switch (type) {
      case HIDE_LEFT:
        left = items[0]
        border = items[1]
        right = items[2]

        if (!left.hidden) {
          left.hidden = true
          border.hidden = true
          right.width += left.width + border.width
        } else {
          left.hidden = false
          border.hidden = false
          right.width -= left.width + border.width
        }

        for (let i = 0; i < 2; i++) {
          stores[0].trigger(i, { hidden: left.hidden })
        }
        stores[0].trigger(right.id, { width: right.width })

        return

      case HIDE_RIGHT:
        left = items[items.length - 3]
        border = items[items.length - 2]
        right = items[items.length - 1]

        if (!right.hidden) {
          right.hidden = true
          border.hidden = true
          left.width += right.width + border.width
        } else {
          right.hidden = false
          border.hidden = false
          left.width -= right.width + border.width
        }

        for (let i = 1; i < 3; i++) {
          stores[0].trigger(items.length - i, { hidden: right.hidden })
        }
        stores[0].trigger(left.id, { width: left.width })

        return

      case RESIZE:
        left = items[payload.id - 1]
        right = items[payload.id + 1]
        border = items[payload.id]

        let offset = payload.offset - items
          .slice(0, payload.id)
          .reduce((offset, item) => offset += item.width, 0)

        left.width += offset
        right.width -= offset

        stores[0].trigger(payload.id - 1, { width: left.width })
        stores[0].trigger(payload.id + 1, { width: right.width })

        return

      case LOCK:
        return

      default:
        return
    }
  }

  const dispatcher = new Dispatcher()

  dispatcher.register(actions)

  return {
    dispatcher,

    stores
  }
}
