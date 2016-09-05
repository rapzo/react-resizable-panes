import React, { Component } from 'react'
import style from './style.css'

export default class Pane extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hover: false,
      selected: false,
      hidden: false,
      width: props.pane.width
    }
  }

  componentDidMount () {
    const { pane, trigger } = this.props

    document.addEventListener('keydown', (e) => this.handleKeyDown(e))

    trigger(pane.id, (payload) => this.handleUpdate(payload))
  }

  componentWillUnmount () {
    const { pane, release } = this.props

    document.removeEventListener('keydown', (e) => this.handleKeyDown(e))

    release(pane.id, (payload) => this.handleUpdate(payload))
  }

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

  handleEnter () {
    // if already there - for changing windows situations that would trigger a
    // re-render
    if (this.state.hover) return;

    this.setState({
      hover: true
    })
  }

  handleOut () {
    this.setState({
      hover: false
    })
  }

  handleUpdate (state) {
    this.setState(state)
  }

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
