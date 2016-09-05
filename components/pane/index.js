import React, { Component } from 'react'
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
      hidden: false,
      width: props.pane.width
    }
  }

  /**
   * Adds proper state update and re-render trigger to the store
   */
  componentDidMount () {
    const { pane, trigger } = this.props

    document.addEventListener('keydown', (e) => this.handleKeyDown(e))

    trigger(pane.id, (payload) => this.handleUpdate(payload))
  }

  /**
   * Unregisters the previous registered triggers
   */
  componentWillUnmount () {
    const { pane, release } = this.props

    document.removeEventListener('keydown', (e) => this.handleKeyDown(e))

    release(pane.id, (payload) => this.handleUpdate(payload))
  }

  /**
   * Handler method for dealing with keyboard interaction
   * Identifies if the proper select combination was produced altering its state
   */
  handleKeyDown (e) {
    if (!this.state.hover || !e.ctrlKey) return;

    // `r` key
    if (e.keyCode === 72) {
      e.preventDefault()

      this.setState({
        selected: !this.state.selected
      })
    }
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
  handleOut () {
    this.setState({
      hover: false
    })
  }

  /**
   * Handler function triggered by the store to create a state update and component
   * re-render
   */
  handleUpdate (state) {
    this.setState(state)
  }

  /**
   * Component method that renders it to the dom tree
   */
  render () {
    const { pane } = this.props
    const { selected, width } = this.state
    const styles = {
      width: `${width}px`,
      background: selected ? 'green' : 'red',
      display: pane.hidden ? 'none' : 'block'
    }

    return (
      <div
        style={styles}
        className={style.pane}
        onMouseEnter={::this.handleEnter}
        onMouseOut={::this.handleOut}
      >
        <ul>
          <li>Mouse hover: <strong>{String(this.state.hover)}</strong></li>
          <li>Width: <strong>{styles.width}</strong></li>
        </ul>
      </div>
    )
  }
}
