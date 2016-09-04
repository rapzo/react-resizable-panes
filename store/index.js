import { Dispatcher } from 'flux'
import Pane from './pane'
import Border from './border'
import { HIDE_LEFT, HIDE_RIGHT, RESIZE } from './actions'



export const store = (setup) => {
  const rows = setup.rows.map((row) => [
    new Pane('left', { width: setup.size.pane }),
    new Border('left', { width: setup.size.border }),
    new Pane('main', { width: setup.size.pane }),
    new Border('right', { width: setup.size.border }),
    new Pane('right', { width: setup.size.pane })
  ])

  const actions = (action) => {
    switch (action.type) {
      case HIDE_LEFT:
        console.log(action)
        return {}

      case HIDE_RIGHT:
        console.log(action)
        return {}

      case RESIZE:
        console.log(action)
        return {}

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
