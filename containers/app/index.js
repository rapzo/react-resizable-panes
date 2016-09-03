import React, { Component } from 'react'
import { Dispatcher } from 'flux'
import Pane from '../../components/pane'
import Border from '../../components/border'
import store from '../../store'

import style from './style.css'

const State = {
  hide: {
    left: false,
    right: false
  },
  select: false,
  resize: {
    offset: 0
  }
}

const AppDispatcher = new Dispatcher()
AppDispatcher.register(store)

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

export default class App extends Component {
  constructor () {
    super()

    this.state = {
      size: resize(window.innerWidth),
      control: false
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
      case 72:
        console.log('ctrl+h')
        return;
      case 76:
        console.log('ctrl+l')
        return;
      case 82:
        console.log('ctrl+r')
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
        <Pane width={this.state.size.pane} store={store} />
        <Border width={this.state.size.border} />
        <Pane width={this.state.size.pane} store={store} />
        <Border width={this.state.size.border} />
        <Pane width={this.state.size.pane} store={store} />
      </section>
    )
  }
}
