import React, { Component } from 'react'
import Pane from '../../components/pane'
import Border from '../../components/border'
import style from './style.css'

export default class LeftPane extends Component {
  constructor (props) {
    super(props)

    this.style = {
      width: `${props.border + props.pane}px`
    }
  }

  render () {
    return (
      <section style={this.style} className={style.pane}>
        <Pane size={this.props.pane} />
        <Border size={this.props.border} />
      </section>
    )
  }
}
