import { Dispatcher } from 'flux'
import Pane from './pane'
import Border from './border'
import { HIDE_LEFT, HIDE_RIGHT, RESIZE } from './actions'

export const store = (setup) => {
  const rows = setup.rows.map((row) => [
    new Pane(0, { name: 'left', width: setup.size.pane }),
    new Border(1, { name: 'left', width: setup.size.border }),
    new Pane(2, { name: 'main', width: setup.size.pane }),
    new Border(3, { name: 'right', width: setup.size.border }),
    new Pane(4, { name: 'right', width: setup.size.pane })
  ])

  const actions = (action) => {
    const { type, payload } = action

    switch (type) {
      case HIDE_LEFT:
        console.log(action)
        return {}

      case HIDE_RIGHT:
        console.log(action)
        return {}

      case RESIZE:
        const left = rows[0][payload.id - 1]
        const right = rows[0][payload.id + 1]
        const border = rows[0][payload.id]

        let offset = payload.offset - rows[0]
          .slice(0, payload.id)
          .reduce((offset, item) => offset += item.width, 0)

        left.width += offset
        right.width -= offset
        return

      default:
        return
    }
  }

  const dispatcher = new Dispatcher()

  dispatcher.register(actions)

  return {
    dispatcher,
    rows
  }
}
