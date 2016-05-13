import React, { Component, PropTypes } from 'react'
import Rebase from 're-base'

import ChatList from './ChatList'
import ChatForm from './ChatForm'
import ChatKill from './ChatKill'

import auth from './config/auth'

const base = Rebase.createClass('https://quicker-dev.firebaseio.com')

export default class Chat extends Component {
  constructor (props, context) {
    super(props)
    this.state = {
      chats: [],
      roomName: ''
    }
  }
  componentDidMount () {
    let roomKey = this.props.params.groupUrl
    console.log('ROOMKEY', roomKey)

    base.syncState(roomKey, {
      context: this,
      state: 'chats',
      asArray: true
    })
  }

  componentWillMount () {
    console.log('[Chat] called componentWillMount ()')
  }

  _handleMessageSubmit (msg) {
    let room = this.props.params.groupUrl
    let user = auth.getUser()
    base.post(room, {
      data: this.state.chats.concat(
        [
          { message: msg, user: user }
        ]
      ),
      context: this,
      then: () => {
        console.log('POSTED ONE!')
      }
    })
  }

  render () {
		// @FIXME params -> if params, roomKey not eq then ?
    return (
      <div>
				<ChatKill roomKey={this.props.params.groupUrl}/>
        <ChatList messages={this.state.chats} />
        <ChatForm onCommentSubmit={this._handleMessageSubmit.bind(this)} />
      </div>
    )
  }
 }

Chat.propTypes = {
  params: PropTypes.object.isRequired
}

Chat.contextTypes = {
  router: React.PropTypes.object.isRequired
}
