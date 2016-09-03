import React, { Component } from 'react'
// import Store from '../../store'
import Pane from '../../components/pane'
import Border from '../../components/border'

import style from './style.css'

const defaults = {
  panes: 3,
  borders: 2,
  borderSize: 6
}

const resize = (width) => ({
  border: defaults.borderSize,
  pane: Math.floor((width - (defaults.borders * defaults.borderSize)) / defaults.panes)
})

export default class App extends Component {
  constructor () {
    super()

    this.state = {
      size: resize(window.innerWidth)
    }
  }

  componentDidMount () {
    window.addEventListener('resize', () => this.handleResize())
    document.addEventListener('keyup', (e) => this.handleKey(e))
  }

  componentWillUnmount () {
    window.removeEventListener('resize', () => this.handleResize())
    document.removeEventListener('keyup', () => this.handleKey())
  }

  handleResize () {
    console.log(resize(window.innerWidth), window.innerWidth)
    this.setState({
      size: resize(window.innerWidth)
    })
  }

  handleKey (e) {
    if (!e.ctrlKey) return;

    switch (e.key) {
      case 'h':
        console.log('ctrl+h')
        return;
      case 'l':
        console.log('ctrl+l')
        return;
      case 'r':
        console.log('ctrl+r')
        return;
      default:
        return;
    }
  }

  render () {
    return (
      <section className={style.panes}>
        <Pane width={this.state.size.pane} />
        <Border width={this.state.size.border} />
        <Pane width={this.state.size.pane} />
        <Border width={this.state.size.border} />
        <Pane width={this.state.size.pane} />
      </section>
    )
  }
}
