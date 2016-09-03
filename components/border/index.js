import React, { Component } from 'react'
import style from './style.css'

export default class Border extends Component {
  constructor (props) {
    super(props)
  }

  handleDrag () {
    console.log('dragging')
  }

  handleDragEnter () {
    console.log('enter dragging')
  }

  handleDragStart () {
    console.log('start dragging')
  }

  handleDragEnd () {
    console.log('end dragging')
  }

  handleDragExit () {
    console.log('exit dragging')
  }

  handleDragLeave () {
    console.log('leave dragging')
  }

  handleDragOver () {
    console.log('over dragging')
  }

  render () {
    const width = {
      width: `${this.props.width}px`
    }

    return (
      <div
        style={width}
        className={style.border}
        onDrag={::this.handleDrag}
        onDragEnter={::this.handleDragEnter}
        onDragExit={::this.handleDragExit}
        onDragStart={::this.handleDragStart}
        onDragOver={::this.handleDragOver}
        onDragLeave={::this.handleDragLeave}
        onDragEnd={::this.handleDragEnd}
      ></div>
    )
  }
}
