import React, { Component, PropTypes } from 'react'
import Rebase from 're-base'

import user from './config/user'

const base = Rebase.createClass('https://quicker-dev.firebaseio.com')

export default class ChatKill extends Component {
  constructor (props, context) {
    super(props)
    this.state = {
      chats: []
    }
  }

  _handleClick (e) {
    let roomKey = this.props.roomKey

    base.post(roomKey, {
      data: this.state.chats,
      context: this,
       // This 'then' method will run after the post has finished.
      then: () => {
        console.log('DEL SUCCESS')
        user.leaveGroupMessages()
        this.context.router.push('/home')
      }
    })
  }

  render () {
    console.log(this.props)
    return (
      <div>
      <button onClick={this._handleClick.bind(this)}>KillThisChat</button>
      </div>
    )
  }
}

ChatKill.propTypes = {
  roomKey: PropTypes.string.isRequired
}

ChatKill.contextTypes = {
  router: React.PropTypes.object.isRequired
}
