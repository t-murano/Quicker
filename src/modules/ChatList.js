import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import ChatMessage from './ChatMessage'

export default class ChatList extends Component {
  componentDidMount () {
    // @FIX: NOT WORKING
    // this._focusCurrentMsg()
  }
  componentDidUpdate (prevProps) {
    // Check if new message was added:
    if (this.props.messages.length === prevProps.messages.length + 1) {
      // Scroll to bottom
      this._focusCurrentMsg()
    }
  }
  // Auto Scroll to bottom of a ChatList
  _focusCurrentMsg () {
    let list = findDOMNode(this.refs.list)
    list.scrollTop = list.scrollHeight
  }
  render () {
    const Messages = this.props.messages.map(obj => (
      <ChatMessage key={obj.key} msg={obj.message.msg} />
    ))
    return (
      <div
        ref='list'
        className='chat-list'>
        {Messages}
      </div>
    )
  }
}

ChatList.propTypes = {
  messages: PropTypes.array.isRequired
}
