import React, { Component, PropTypes } from 'react'

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
              <img src={this.props.user.icon} className='user-profile chat-user-icon' />
              <small>{this.props.user.name}</small>
              <small>{this.props.time}</small>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

ChatMessage.propTypes = {
  msg: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  time: PropTypes.string.isRequired
}
