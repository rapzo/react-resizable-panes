export const HIDE_LEFT = 'hide left'
export const HIDE_RIGHT = 'hide right'
export const RESIZE = 'resize'

export default (action, payload = {}) => ({
  type: action,
  payload
})
