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
      `dragging #${border.id}(${border.name}) clientX: ${e.clientX}; state: ${this.state.x}; e: ${border.x}`
    )
    if (e.clientX <= 0 || e.clientX === this.state.x) return;
  }

  handleDragStart () {
    console.log('start dragging')
    this.setState({
      // position: 'absolute'
    })
  }

  handleDragEnd (e) {
    const { border, dispatch } = this.props
    console.log('end dragging')
    dispatch(actions(RESIZE, {
      id: border.id,
      offset: e.clientX
    }))
    this.forceUpdate()
  }

  render () {
    const { border } = this.props
    const styles = {
      width: `${border.width}px`
    }

    return (
      <div
        style={styles}
        className={style.border}
        draggable={true}
        onDrag={::this.handleDrag}
        onDragStart={::this.handleDragStart}
        onDragEnd={::this.handleDragEnd}
      ></div>
    )
  }
}
