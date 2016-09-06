import React, { Component } from 'react'
import actions, { RESIZE } from '../../store/actions'
import Border from '../border'
import style from './style.css'

/**
 * Class for the pane component
 * The pane component should have a keyboard handler event to trigger selection
 * and deselection when triggered.
 * The pane should update its width when a border is moved
 * The pane should hide itself when the parent container receives a hide keyboard
 * event
 */
export default class Pane extends Component {

  /**
   * Populates the internal state and properties from parent container
   */
  constructor (props) {
    super(props)

    this.state = {
      hover: false,
      selected: false,
      hidden: props.hidden,
      width: props.width
    }
  }

  /**
   * Adds proper state update and re-render trigger to the store
   */
  componentDidMount () {
    document.addEventListener('keydown', (e) => this.handleKeyDown(e))
  }

  /**
   * Unregisters the previous registered triggers
   */
  componentWillUnmount () {
    document.removeEventListener('keydown', (e) => this.handleKeyDown(e))
  }

  handleKeyDown (e) {
    if (!e.ctrlKey) return;

    e.preventDefault()

    if (e.keyCode !== 72) return;

    if (!this.state.hover) return;

    this.setState({
      selected: !this.state.selected
    })
  }

  /**
   * Handler method for dealing when the mouse enters the pane, setting its state
   * to identify the mouse over event
   */
  handleEnter () {
    // if already there - for changing windows situations that would trigger a
    // re-render
    if (this.state.hover) return;

    this.setState({
      hover: true
    })
  }

  /**
   * Handler method for dealing when the mouse leaves the pane, setting its state
   * to identify the mouse out event
   */
  handleLeave () {
    this.setState({
      hover: false
    })
  }

  /**
   * Handler method that is called on every drag event emitted by the browser
   * Dispatches the action `RESIZE` to the store
   */
  handleDrag (e) {
    const { dispatch } = this.props

    // clears some crazy mouse hops where position is nowhere to be seen
    if (e.clientX <= 0) return

    dispatch(actions(RESIZE, {
      offset: e.clientX
    }))
  }

  /**
   * Handler method that flags the drop of the draggable component
   * Dispatches the action `RESIZE` to the store to update with the
   * latest coordinates for the leftmost and rightmost panes
   * Flags the end of the drag event
   */
  handleDragEnd (e) {
    const { border, dispatch } = this.props

    dispatch(actions(RESIZE, {
      id: border.id,
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
    const { id, dispatch, pane } = this.props
    const { width, selected } = this.state
    const styles = {
      width: `${pane.width}px`,
      background: selected ? 'red' : 'green',
      display: pane.hidden ? 'none' : 'block'
    }

    const border = pane.border ?
      <Border className={style.border} id={id} width={width} dispatch={dispatch} /> :
      null

    return (
      <div
        style={styles}
        className={style.pane}
        onMouseEnter={::this.handleEnter}
        onMouseLeave={::this.handleLeave}
      >
        {border}
      </div>
    )
  }
}
