import { Action } from './actions'
import { FluxStore } from 'flux/utils'

export default class CoordStore extends FluxStore {
  constructor () {
    super()
  }

  getInitialState() {
    return [{
      hide: {
        right: false,
        left: false
      },
      resize: 0,
      hover: false
    }]
  }

  reduce (state, action) {
    switch (action.type) {
      case 'hide right':
        return { ...state, hide: { right: true } }

      case 'hide left':
        return { ...state, hide: { left: true } }

      case 'resize left':
        return { ...state }

      case 'resize right':
        return { ...state}

      default:
        return state
    }
  }
}
