import {
  HIDE_LEFT,
  HIDE_RIGHT,
  RESIZE_LEFT,
  RESIZE_RIGHT,
  SELECT
} from './actions'

export default {
  [HIDE_LEFT] () {

  },

  [HIDE_RIGHT] () {

  },

  [RESIZE_LEFT] () {

  },

  [RESIZE_RIGHT] () {

  },

  [SELECT] (state) {
    return { ...state, select: !state.select }
  }
}
