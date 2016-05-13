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
              <div>
                <img src={this.props.user.icon} className='user-profile chat-user-icon' />
              </div>
              <div className='msg-info'>
                <small>{this.props.user.name}</small>
                <small className='time'>{this.props.time}</small>
              </div>
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
