import { EventEmitter } from 'events'
import reducers from './reducers'
import {
  HIDE_LEFT,
  HIDE_RIGHT,
  RESIZE_LEFT,
  RESIZE_RIGHT,
  SELECT
} from './actions'

const initialState = {
  hide: {
    left: false,
    right: false
  },
  select: false,
  resize: {
    offset: 0
  }
}

export default (action, state) => {
  switch (action.type) {
    case HIDE_RIGHT:
      return { hide: { right: true }, ...state }

    case HIDE_LEFT:
      return { hide: { left: true }, ...state }

    case RESIZE_RIGHT:
      return { ...state }

    case RESIZE_LEFT:
      return { ...state}

    case SELECT:
      return reducer[SELECT](action, state)

    default:
      return state
  }
}
