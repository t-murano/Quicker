import React, { Component } from 'react'
import SkyLight from 'react-skylight'

import room from './config/room'
import user from './config/user'

export default class ChatJoin extends Component {
  constructor (props, context) {
    super(props)
    this.state = {
      token: '',
    }
  }
  _handleChange (e) {
    let token = e.target.value
    this.setState({
      token: token
    })
  }
  _handleSubmit () {
    room.setRoom(this.state)
    this.refs.simpleDialog.hide()

  }
  _executeAfterModalClose() {
    user.enter()
    this.context.router.replace(`/home/${this.state.token}`)
  }
  render () {
    return (
      <div>
        <button className='join' onClick={() => this.refs.simpleDialog.show()}>joinChat</button>
        <SkyLight
          ref="simpleDialog"
          afterClose={this._executeAfterModalClose.bind(this)}
          title="JOIN CHATROOM">
            <label for='chatGroupPass'>roomKey?</label>
            <input onChange={this._handleChange.bind(this)} id='chatGroupPass' type='text' placeholder='roomKey?' autoFocus />
            <button onClick={this._handleSubmit.bind(this)}>JOIN</button>
        </SkyLight>
      </div>
    )
  }
}
ChatJoin.contextTypes = {
  router: React.PropTypes.object.isRequired
}
