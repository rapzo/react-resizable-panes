import React, { Component } from 'react'
import style from './style.css'

export default class Pane extends Component {
  constructor (props) {
    super(props)

    this.style = {
      width: `${props.size}px`
    }
  }

  render () {
    return (
      <div style={this.style} className={style.pane}></div>
    )
  }
}
