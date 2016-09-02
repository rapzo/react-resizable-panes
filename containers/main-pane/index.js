import React, { Component } from 'react'
import Pane from '../../components/pane'
import Border from '../../components/border'
import style from './style.css'

export default class MainPane extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <section className={style.pane}>
        <Pane />
      </section>
    )
  }
}
