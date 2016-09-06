import React, { Component } from 'react'
import actions, { RESIZE } from '../../store/actions'
import style from './style.css'

/**
 * Class for the border component
 * The border component should signal resize events for the adjacent panes
 * The border component also should be hidden when the leftmost or the
 * rightmost panes are triggered to be hidden
 */
export default class Border extends Component {

  /**
   * Populates the internal state and properties from parent container
   */
  constructor (props) {
    super(props)

    this.state = {
      grabbed: false
    }
  }

  /**
   * Handler method to help with the mouse-down event
   * Updates the state with the `grabbed` flag on
   */
  handleGrab () {
    this.setState({
      grabbed: true
    }, () => {
      document.addEventListener('mousemove', (e) => this.handleDrag(e))
      document.addEventListener('mouseup', (e) => this.handleRelease(e))
    })
  }

  /**
   * Handler method to help with the mouse-up event
   * Updates the state with the `grabbed` flag off
   */
  handleRelease (e) {
    const { id, dispatch } = this.props

    dispatch(actions(RESIZE, {
      id,
      offset: e.clientX
    }))

    this.setState({
      grabbed: false,
      dragging: false
    }, () => {
      document.removeEventListener('mousemove', () => {})
      document.removeEventListener('mouseup', () => {})
    })
  }

  /**
   * Handler method that is called on every drag event emitted by the browser
   * Dispatches the action `RESIZE` to the store
   */
  handleDrag (e) {
    const { id, dispatch, width } = this.props

    if (!this.state.grabbed) return

    // clears some crazy mouse hops where position is nowhere to be seen
    if (e.clientX <= 0) return

    this.setState({
      dragging: true
    }, () => dispatch(actions(RESIZE, {
      id,
      offset: e.clientX,
      width: width
    })))
  }

  /**
   * Component method that renders it to the dom tree
   */
  render () {
    return (
      <div
        className={style.border}
        onMouseDown={::this.handleGrab}
      />
    )
  }
}
