import React, { Component } from 'react'
import Pane from '../../components/pane'
import Border from '../../components/border'
import { store } from '../../store'
import actions, { HIDE_LEFT, HIDE_RIGHT } from '../../store/actions'
import style from './style.css'

// default properties for this test case
const defaults = {
  panes: 3,
  borders: 2,
  borderSize: 6
}

// calculates the initial state based on the window size
const initialState = (size) => ({
  rows: [{
    panes: defaults.panes,
    borders: defaults.borders
  }],
  size
})

// helper so math is not spreaded all around
const resize = (width) => ({
  border: defaults.borderSize,
  pane: (width - (defaults.borders * defaults.borderSize)) / defaults.panes,
  width
})

// reference for the initial, unpainted window state
const state = initialState(resize(window.innerWidth))

// sets up the state machine
const { dispatcher, stores } = store(state)


/**
 * Application container responsible for application wide events, such as
 * controlling the panes and borders store and dom level events such as
 * window resize and keyboard events
 */
export default class App extends Component {
  constructor () {
    super()

    this.state = {
      items: stores,
      ...state
    }
  }

  /**
   * Registers dom events to component state update actions
   */
  componentDidMount () {
    window.addEventListener('resize', () => this.handleResize())
    document.addEventListener('keydown', (e) => this.handleKeyDown(e))
  }

  /**
   * Unregisters dom events to component state update actions
   */
  componentWillUnmount () {
    window.removeEventListener('resize', () => this.handleResize())
    document.removeEventListener('keydown', (e) => this.handleKeyDown(e))
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
        return;
      case 82:
        dispatcher.dispatch(actions(HIDE_RIGHT))
        return;
      case 88:
        return;
      default:
        return;
    }
  }

  /**
   * Component render method
   */
  render () {
    const store = this.state.items[0]
    const { items } = store

    return (
      <section className={style.panes}>
        {items.map((item, i) => i % 2 === 0 ?
          <Pane key={i} dispatch={::dispatcher.dispatch} trigger={::store.addTrigger} release={::store.removeTrigger} pane={item} /> :
          <Border key={i} dispatch={::dispatcher.dispatch} trigger={::store.addTrigger} release={::store.removeTrigger} border={item} />
        )}
      </section>
    )
  }
}
