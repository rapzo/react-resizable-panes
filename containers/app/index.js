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
  pane: (width - (defaults.borders * defaults.borderSize)) / defaults.panes
})

// reference for the initial, unpainted window state
const state = initialState(resize(window.innerWidth))

// sets up the state machine
const { dispatcher, stores } = store(state)

export default class App extends Component {
  constructor () {
    super()

    this.state = {
      items: stores,
      ...state
    }
  }

  componentDidMount () {
    window.addEventListener('resize', () => this.handleResize())
    document.addEventListener('keydown', (e) => this.handleKeyDown(e))
  }

  componentWillUnmount () {
    window.removeEventListener('resize', () => this.handleResize())
    document.removeEventListener('keydown', (e) => this.handleKeyDown(e))
  }

  handleResize () {
    this.setState({
      size: resize(window.innerWidth)
    })
  }

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
