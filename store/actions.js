import * as Actions from './constants'

export type Action = {
  type: Actions.HIDE_LEFT
} | {
  type: Actions.HIDE_RIGHT
} | {
  type: Actions.RESIZE_LEFT,
  offset: number
} | {
  type: Actions.RESIZE_RIGHT,
  offset: number
} | {
  type: Actions.HOVER
}
