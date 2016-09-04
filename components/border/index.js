import React, { Component } from 'react'
import actions, { RESIZE } from '../../store/actions'
import style from './style.css'

export default class Border extends Component {
  constructor (props) {
    super(props)

    this.state = {
      position: 'relative',
      x: 0
    }
  }

  handleDrag (e) {
    const { border, dispatch } = this.props

    console.log(
      `dragging #${border.id}(${border.name}) clientX: ${e.clientX}; state: ${this.state.x}`
    )
    if (e.clientX <= 0 || e.clientX === this.state.x) return;

    dispatch(actions(RESIZE, {
      id: border.id,
      offset: e.clientX - this.state.x
    }))

    this.setState({
      x: e.clientX - this.state.x
    })
  }

  handleDragEnter () {
    console.log('enter dragging')
  }

  handleDragStart () {
    console.log('start dragging')
    this.setState({
      // position: 'absolute'
    })
  }

  handleDragEnd (e) {
    console.log('end dragging')
    this.setState({
      position: 'relative',
      x: e.clientX - this.state.x
    })
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
    const { border } = this.props
    const { x, position } = this.state
    const styles = {
      width: `${border.width}px`,
      position: position,
      left: `${x}px`
    }

    return (
      <div
        style={styles}
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
