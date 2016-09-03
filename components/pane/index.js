import React, { Component } from 'react'
import style from './style.css'

export default class Pane extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: false,
      hidden: false
    }
  }

  handleEnter () {
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
    this.state.selected = this.props.store.select && this.state.hover

    const styles = {
      width: `${this.props.width}px`,
      background: this.state.selected ? 'green' : 'red'
    }

    return (
      <div
        style={styles}
        className={style.pane}
        onMouseEnter={::this.handleEnter}
        onMouseOut={::this.handleOut}
      >
        <p>Mouse hover: {String(this.state.hover)}</p>
      </div>
    )
  }
}
