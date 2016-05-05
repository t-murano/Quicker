import React, { Component, PropTypes } from 'react'
import Rebase from 're-base'
import ChatList from './ChatList'
import ChatForm from './ChatForm'

const base = Rebase.createClass('https://taube.firebaseio.com')

export default class Chat extends Component {
	constructor (props, context) {
    super(props)
  }
	_handleMessageSubmit (msg) {
    base.post('IAd6ATt2xm23', {
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
        <ChatList messages={this.props.chats} />
        <ChatForm onCommentSubmit={this._handleMessageSubmit.bind(this)} />
      </div>
    )
  }
 }
Chat.propTypes = {
  chats: PropTypes.array.isRequired
}
Chat.contextTypes = {
  router: React.PropTypes.object.isRequired
}
