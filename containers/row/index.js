import React, { Component } from 'react'
import Pane from '../../components/pane'
import { RowStore } from '../../store'
import actions, { HIDE_LEFT, HIDE_RIGHT } from '../../store/actions'
import style from './style.css'

// default properties for this test case
const defaults = {
  panes: 3,
  borders: 2,
  borderSize: 6
}

// helper so math is not spreaded all around
const resize = (width) => ({
  border: defaults.borderSize,
  pane: width / defaults.panes,
  width
})

// sets up the state machine
const { dispatcher, store } = RowStore(resize(window.innerWidth))

/**
 * Application container responsible for application wide events, such as
 * controlling the panes and borders store and dom level events such as
 * window resize and keyboard events
 */
export default class Row extends Component {
  constructor () {
    super()

    this.state = {
      ...Row.getState()
    }
  }

  static getState () {
    return {
      items: store.items
    }
  }

  /**
   * Registers dom events to component state update actions
   */
  componentDidMount () {
    window.addEventListener('resize', () => this.handleResize())
    document.addEventListener('keydown', (e) => this.handleKeyDown(e))

    store.addTrigger(() => this.handleUpdate())
  }

  /**
   * Unregisters dom events to component state update actions
   */
  componentWillUnmount () {
    window.removeEventListener('resize', () => this.handleResize())
    document.removeEventListener('keydown', (e) => this.handleKeyDown(e))
  }

  handleUpdate () {
    this.setState(Row.getState())
  }

  /**
   * Handler method that triggers state updates when the window is resized
   */
  handleResize () {
    this.setState({
      size: resize(window.innerWidth)
    })
  }

  /**
   * Hanlder method that parses keyboard events into proper dispatcher calls
   */
  handleKeyDown (e) {
    if (!e.ctrlKey) return;

    e.preventDefault()

    switch (e.keyCode) {
      case 76:
        dispatcher.dispatch(actions(HIDE_LEFT))
        return
      case 82:
        dispatcher.dispatch(actions(HIDE_RIGHT))
        return
      default:
        return
    }
  }

  /**
   * Component render method
   */
  render () {
    const { items } = this.state

    return (
      <section className={style.panes}>
        {items.map((item, i) =>
          <Pane
            key={i}
            pane={item}
            id={item.id}
            width={item.width}
            hidden={item.hidden}
            dispatch={::dispatcher.dispatch}
          />
        )}
      </section>
    )
  }
}
