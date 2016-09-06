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
      position: 'relative',
      x: 0,
      moved: false,
      locked: false,
      grabbed: false,
      hidden: false
    }
  }

  /**
   * Action called by the store that create a component render
   * @type {Object} the state produced by the store
   */
  handleUpdate (state) {
    this.setState(state)
  }

  /**
   * Handler method to help with the mouse-down event
   * Updates the state with the `grabbed` flag on
   */
  handleGrab (e) {
    this.setState({ grabbed: true, x: e.target.offsetLeft })
    document.addEventListener('mousemove', (e) => this.handleDrag(e))
    document.addEventListener('mouseup', (e) => this.handleRelease(e))
  }

  /**
   * Handler method to help with the mouse-up event
   * Updates the state with the `grabbed` flag off
   */
  handleRelease (e) {
    this.setState({ grabbed: false, x: e.target.offsetLeft })
    document.removeEventListener('mousemove', (e) => this.handleDrag(e))
    document.removeEventListener('mouseup', (e) => this.handleRelease(e))
  }

  /**
   * Handler method that flags the drag start
   */
  handleDragStart (e) {
    this.setState({
      dragging: true
    })
  }

  /**
   * Handler method that is called on every drag event emitted by the browser
   * Dispatches the action `RESIZE` to the store
   */
  handleDrag (e) {
    e.preventDefault()

    const { id, dispatch, width } = this.props

    if (!this.state.grabbed) return

    // clears some crazy mouse hops where position is nowhere to be seen
    if (e.clientX <= 0) return

    dispatch(actions(RESIZE, {
      id,
      offset: e.clientX,
      width: width
    }))
  }

  /**
   * Handler method that flags the drop of the draggable component
   * Dispatches the action `RESIZE` to the store to update with the
   * latest coordinates for the leftmost and rightmost panes
   * Flags the end of the drag event
   */
  handleDragEnd (e) {
    const { id, dispatch } = this.props

    dispatch(actions(RESIZE, {
      id,
      offset: e.clientX
    }))

    this.setState({
      dragging: false
    })
  }

  /**
   * Component method that renders it to the dom tree
   */
  render () {
    return (
      <div
        className={style.border}
        onMouseDown={::this.handleGrab}
        onMouseOver={(e) => e.preventDefault()}
        onMouseOut={(e) => e.preventDefault()}
      ></div>
    )
  }
}
