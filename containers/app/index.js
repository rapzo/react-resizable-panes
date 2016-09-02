import React, { Component } from 'react'
import LeftPane from '../left-pane'
import MainPane from '../main-pane'
import RightPane from '../right-pane'
import style from './style.css'


const resize = (width) => ({
  border: 6,
  pane: Math.floor(width / 3) - (2 * 6)
})

export default class App extends Component {
  constructor () {
    super()

    this.state = {
      size: resize(window.innerWidth)
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  handleResize () {
    this.setState({
      width: resize(window.innerWidth)
    })
  }

  render () {
    return (
      <section className={style.panes}>
        <LeftPane
          border={this.state.size.border}
          pane={this.state.size.pane}
        />
        <MainPane
          pane={this.state.size.pane}
        />
        <RightPane
          border={this.state.size.border}
          pane={this.state.size.pane}
        />
      </section>
    )
  }
}
