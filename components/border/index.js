import React, { Component } from 'react'
import style from './style.css'

export default class Border extends Component {
  constructor (props) {
    super(props)

    this.style = {
      width: props.size
    }
  }

  render () {
    return (
      <div style={this.style} className={style.border}></div>
    )
  }
}
