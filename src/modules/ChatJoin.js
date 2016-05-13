import React, { Component } from 'react'
import SkyLight from 'react-skylight'
import user from './config/user'

export default class ChatJoin extends Component {
  constructor (props, context) {
    super(props)
    this.state = {
      token: ''
    }
  }

  _handleChange (e) {
    let token = e.target.value
    this.setState({
      token: token
    })
  }

  _handleSubmit () {
    this.refs.simpleDialog.hide()
  }

  _executeAfterModalClose () {
    user.enterGroupMessages()
    this.context.router.replace(`/home/${this.state.token}`)
  }

  render () {
    return (
      <div>
        <button className='join' onClick={() => this.refs.simpleDialog.show()}>
          グループトークに参加
        </button>
        <SkyLight
          ref='simpleDialog'
          afterClose={this._executeAfterModalClose.bind(this)}
          title='グループトークに参加'>
          <div className='popup'>
            <div className='pop-items'>
              <label htmlFor='chatGroupPass'>参加したいグループパスワードを入力してください。</label>
              <input onChange={this._handleChange.bind(this)} id='chatGroupPass' type='text' placeholder='' autoFocus />
            </div>
            <button onClick={this._handleSubmit.bind(this)}>
              グループトークに参加
            </button>
          </div>
        </SkyLight>
      </div>
    )
  }
}

ChatJoin.contextTypes = {
  router: React.PropTypes.object.isRequired
}
