import React, { Component } from 'react'
import style from './style.css'

export default class Pane extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hover: false,
      selected: false,
      hidden: false,
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', (e) => this.handleKeyDown(e))
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', (e) => this.handleKeyDown(e))
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

  render () {
    const { pane } = this.props
    const { selected } = this.state
    const styles = {
      width: `${pane.width}px`,
      background: selected ? 'green' : 'red'
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
