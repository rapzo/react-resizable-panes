import React, { Component } from 'react'
import { Dispatcher } from 'flux'
import Pane from '../../components/pane'
import Border from '../../components/border'
import store from '../../store'
import {
  HIDE_LEFT,
  HIDE_RIGHT,
  RESIZE_LEFT,
  RESIZE_RIGHT,
  SELECT
} from '../../store/actions'

import style from './style.css'

const initialState = () => ({
  hide: {
    left: false,
    right: false
  },
  select: false,
  resize: {
    offset: 0
  },
  size: 0
})

const AppDispatcher = new Dispatcher()

const defaults = {
  panes: 3,
  borders: 2,
  borderSize: 6
}

const resize = (width) => ({
  border: defaults.borderSize,
  pane: Math.floor(
    (width - (defaults.borders * defaults.borderSize)) / defaults.panes
  )
})

AppDispatcher.register(store)

export default class App extends Component {
  constructor () {
    super()

    this.state = {
      size: resize(window.innerWidth)
    }
  }

  componentDidMount () {
    this.setState(initialState())
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
      case 72:
        console.log('ctrl+h')
        return;
      case 76:
        console.log('ctrl+l')
        return;
      case 82:
        console.log('ctrl+r')
        this.setState(store(SELECT, this.state))
        return;
      case 88:
        console.log('linux test')
        return;
      default:
        return;
    }
  }

  render () {
    return (
      <section className={style.panes}>
        <Pane width={this.state.size.pane} store={this.state} />
        <Border width={this.state.size.border} />
        <Pane width={this.state.size.pane} store={this.state} />
        <Border width={this.state.size.border} />
        <Pane width={this.state.size.pane} store={this.state} />
      </section>
    )
  }
}
