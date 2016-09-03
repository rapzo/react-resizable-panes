import { EventEmitter } from 'events'
import reducers from './reducers'
import {
  HIDE_LEFT,
  HIDE_RIGHT,
  RESIZE_LEFT,
  RESIZE_RIGHT,
  SELECT
} from './actions'

const panes = new Set()
const borders = new Set()

export default (action, state) => {
  console.log(action)
  switch (action) {
    case HIDE_RIGHT:
      return { hide: { right: true }, ...state }

    case HIDE_LEFT:
      return { hide: { left: true }, ...state }

    case RESIZE_RIGHT:
      return { ...state }

    case RESIZE_LEFT:
      return { ...state}

    case SELECT:
      console.log('ohai', state)
      return reducers[SELECT](state)

    default:
      return state
  }
}
