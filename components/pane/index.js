import React, { Component } from 'react'
import style from './style.css'

export default class Pane extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hover: false,
      hidden: false
    }
  }

  handleKey (e) {
    console.log(e)
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
    const width = {
      width: `${this.props.width}px`
    }

    return (
      <div
        style={width}
        className={style.pane}
        onMouseEnter={::this.handleEnter}
        onMouseOut={::this.handleOut}
      >
        <p>Mouse hover: {String(this.state.hover)}</p>
      </div>
    )
  }
}
