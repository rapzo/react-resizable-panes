import React from 'react'
import LeftPane from '../left-pane'
import MainPane from '../main-pane'
import RightPane from '../right-pane'
import style from './style.css'

export default class App extends React.Component {
  render () {
    return (
      <section className={style.panes}>
        <LeftPane />
        <MainPane />
        <RightPane />
      </section>
    )
  }
}
