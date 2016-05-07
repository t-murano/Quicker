import React, { Component } from 'react'

export default class ChatMessage extends Component {
  render () {
    return (
      <div>
        <ul>
          <li>
            <div className='msg'>
               <p>{this.props.msg}</p>
            </div>
            <div className='chat-user'>
              <img src={this.props.user.profileImageURL} className='user-profile chat-user-icon' />
              <small>{this.props.user.displayName}</small>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
