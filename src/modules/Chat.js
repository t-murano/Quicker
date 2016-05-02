import React, { Component } from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'

export default class Chat extends Component {
  render () {
    return (
      <div>
        <ChatList/>
        <ChatForm/>
      </div>
    )
  }
}
