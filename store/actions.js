export const HIDE_LEFT = 'hide left'
export const HIDE_RIGHT = 'hide right'
export const RESIZE = 'resize'
export const LOCK = 'lock'

export default (action, payload = {}) => ({
  type: action,
  payload
})
