import React, { Component } from 'react'
import actions, { RESIZE } from '../../store/actions'
import style from './style.css'

export default class Border extends Component {
  constructor (props) {
    super(props)

    this.state = {
      position: 'relative',
      x: 0,
      moved: false,
      locked: false,
      grabbed: false,
      hidden: false
    }
  }

  componentDidMount () {
    const { border, trigger } = this.props

    trigger(border.id, (payload) => this.handleUpdate(payload))
  }

  componentWillUnmount () {
    const { border, release } = this.props

    release(border.id, (payload) => this.handleUpdate(payload))
  }

  handleUpdate ({ width = 0 }) {
    this.setState({ width })
  }

  handleGrab (e) {
    this.setState({ grabbed: true, x: e.target.offsetLeft })
  }

  handleRelease (e) {
    this.setState({ grabbed: false, x: e.target.offsetLeft })
  }

  handleDrag (e) {
    const { border, dispatch } = this.props

    if (e.clientX <= 0) return

    dispatch(actions(RESIZE, {
      id: border.id,
      offset: e.clientX
    }))
  }

  handleDragStart () {
    this.setState({
      dragging: true
    })
  }

  handleDragEnd (e) {
    const { border, dispatch } = this.props

    dispatch(actions(RESIZE, {
      id: border.id,
      offset: e.clientX
    }))

    this.setState({
      dragging: false
    })
  }

  render () {
    const { border } = this.props
    const styles = {
      width: `${border.width}px`,
      display: border.hidden ? 'none' : 'block'
    }

    return (
      <div
        style={styles}
        className={style.border}
        onMouseDown={::this.handleGrab}
        onMouseUp={::this.handleRelease}
        onDrag={::this.handleDrag}
        onDragStart={::this.handleDragStart}
        onDragEnd={::this.handleDragEnd}
      ></div>
    )
  }
}
