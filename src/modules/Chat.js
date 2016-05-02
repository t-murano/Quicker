import React, { Component } from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'

export default class Chat extends Component {
  constructor (props) {
    super(props)
  }
  _handleMessageSubmit (msg) {
    console.log(msg)
  }
  render () {
    return (
      <div>
        <ChatList/>
        <ChatForm onCommentSubmit={this._handleMessageSubmit.bind(this)} />
      </div>
    )
  }
}
