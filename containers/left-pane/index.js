import React, { Component } from 'react'
import Pane from '../../components/pane'
import Border from '../../components/border'
import style from './style.css'

export default class LeftPane extends Component {
  constructor () {
    super()

    this.state = {
      size: style.pane.size
    }
  }

  render () {
    return (
      <section className={style.pane}>
        <Pane />
        <Border />
      </section>
    )
  }
}
