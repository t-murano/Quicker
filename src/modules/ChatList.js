import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import ChatMessage from './ChatMessage'

export default class ChatList extends Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    console.log('chatList: componentDidMount()')
  //   // @FIX: NOT WORKING
  //   // this._focusCurrentMsg()
  //   console.log('[ChatList] called componentDidMount ()')
  }
  componentDidUpdate (prevProps) {
    console.log('chatList: componentDidUpdate()')
    // Check if new message was added:
    if (this.props.messages.length === prevProps.messages.length + 1) {
      // Scroll to bottom
      this._focusCurrentMsg()
    }
  }
  // Auto Scroll to bottom of a ChatList
  // $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight
  // /*.autofocus */
  // .chat-list{overflow: auto; height:600px;}
  _focusCurrentMsg () {
    let list = findDOMNode(this.refs.list)
    list.scrollTop = list.scrollHeight
  }
  render () {
    // make map
    const Messages = this.props.messages.map(obj => (
      <ChatMessage key={obj.key} user={obj.user} msg={obj.message.msg} time={obj.message.time} />
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
