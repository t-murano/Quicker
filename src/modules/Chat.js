import React, { Component, PropTypes } from 'react'
import Rebase from 're-base'
import moment from 'moment'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import ChatKill from './ChatKill'

const base = Rebase.createClass('https://taube.firebaseio.com')

export default class Chat extends Component {
	constructor (props, context) {
    super(props)
		this.state = {
			chats: [],
			roomName: ''
    }
  }
	componentDidMount () {
		let roomKey = this.props.params.chatRoomKey
    base.syncState(roomKey, {
      context: this,
      state: 'chats',
      asArray: true
    })
  }
	componentWillMount() {
		console.log('[Chat] called componentWillMount ()')
	}
	_handleMessageSubmit (msg) {
		let roomKey = this.props.params.chatRoomKey
    // let time = moment().format('h:mm a')
    base.post(roomKey, {
      data: this.state.chats.concat(
				// @FIXME find to user data in parents
        [{ message: msg, user: base.getAuth().github }]
      ),
      context: this,
       // This 'then' method will run after the post has finished.
      then: () => {
        console.log('POSTED')
      }
    })
  }
	render () {
		// @FIXME params -> if params, roomKey not eq then ?
    return (
      <div>
			<h1>ChatRoomName</h1>
				<ChatKill roomKey={this.props.params.chatRoomKey}/>
        <ChatList messages={this.state.chats} />
        <ChatForm onCommentSubmit={this._handleMessageSubmit.bind(this)} />
      </div>
    )
  }
 }
Chat.contextTypes = {
  router: React.PropTypes.object.isRequired
}
