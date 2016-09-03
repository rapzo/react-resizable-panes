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

  [SELECT] (state, action) {
    console.log(state, action)
    return { select: true, ...state }
  }
}
