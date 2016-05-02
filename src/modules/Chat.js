import React, { Component, PropTypes } from 'react'
import Rebase from 're-base'

import ChatList from './ChatList'
import ChatForm from './ChatForm'

const base = Rebase.createClass('https://taube.firebaseio.com')

export default class Chat extends Component {
  constructor (props) {
    super(props)
  }
  _handleMessageSubmit (msg) {
    base.post('chats', {
      data: this.props.chats.concat(
        [{ message: msg }]
      ),
      context: this,
       // This 'then' method will run after the post has finished.
      then: () => {
        console.log('POSTED')
      }
    })
  }
  render () {
    return (
      <div>
        <h1>ChatRoom</h1>
        <ChatList messages={this.props.chats} />
        <ChatForm onCommentSubmit={this._handleMessageSubmit.bind(this)} />
      </div>
    )
  }
}

Chat.propTypes = {
  chats: PropTypes.array.isRequired
}
