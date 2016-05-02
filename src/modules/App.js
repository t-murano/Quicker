import React, { Component } from 'react'
import Rebase from 're-base'
import Chat from './Chat'

const base = Rebase.createClass('https://taube.firebaseio.com')

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: []
    }
  }
  /**
   * Mounting: Before rendering (no DOM yet)
   * Invoked once, immediately before the initial rendering occurs.
   */
  componentWillMount () {
    /*
     * Here we call 'bindToState', which will update
     * our local 'messages' state whenever our 'chats'
     * Firebase endpoint changes.
     */
    base.bindToState('chats', {
      context: this,
      state: 'messages',
      asArray: true
    })
  }
  render () {
    return (<Chat chats={ this.state.messages }/>)
  }
}
