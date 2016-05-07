import React, { Component } from 'react'
import SkyLight from 'react-skylight'

import room from './config/room'
import user from './config/user'

export default class ChatNew extends Component {
  constructor (props, context) {
    super(props)
    this.state = {
      name: '',
      token: '',
      time: 30
    }
  }
  componentWillMount() {
    console.log('[ChatNew] called componentWillMount ()')
    let token = Math.random().toString(36).substring(7)
    this.setState({
      token : token,
      time: 30
    })
  }
  componentDidUpdate () {
    console.log('[ChatNew] called componentDidUpdate ()')
  }
  /**
   * submit made room infomation
   */
  _handleSubmit () {
    // let now = new Date()
    // let newDateObj = new Date()
    // this.setState({
    //   time : newDateObj.setTime(now.getTime() + (this.state.time * 60 * 1000))
    // })
    console.log(this.state)
    if (this.state.name.length === 0) {
      alert('chat room name was null!');
      return
    }
    room.setRoom(this.state)
    this.refs.simpleDialog.hide()
  }
  _executeAfterModalClose() {
    console.log('Modal: ',this.state)
    if(!this.state.name) {
      return
    }
    this.props.roomCreated(this.state.token)
    user.enter()
    this.context.router.replace(`/home/${this.state.token}`)
  }

  _handleChange (e) {
    let nextState = {}
    nextState[e.target.name] = e.target.value
    this.setState({
      name: nextState.name,
      time: nextState.time ? parseInt(nextState.time) : 30
    })

  }
  render () {
    return (
      <div>
        <button className='create' onClick={() => this.refs.simpleDialog.show()}>createNewChat</button>
        <SkyLight
          ref='simpleDialog'
          afterClose={this._executeAfterModalClose.bind(this)}
          title='CREATE CHATROOM'>
            <label for='chatGroupName'>name</label>
            <input name='name' onChange={this._handleChange.bind(this)} id='chatGroupName' type='text' placeholder='blankRoom' autoFocus />
            <label for='chatGroupPass'>roomKey</label>
            <input id='chatGroupPass' type='text' value={this.state.token} disabled />
            <label for='chatTime'>chatTime </label>
            <select name='time' defaultValue={this.state.time} onChange={this._handleChange.bind(this)} id='chatTime'>
              <option value='30'>30min</option>
              <option value='60'>1hr</option>
              <option value='120'>2hr</option>
            </select>
            <button onClick={this._handleSubmit.bind(this)}>CREATE</button>
        </SkyLight>
      </div>
    )
  }
}
ChatNew.contextTypes = {
  router: React.PropTypes.object.isRequired
}
