import React, { Component } from 'react'

export default class ChatForm extends Component {
  render () {
    return (
      <div className='comment-form'>
        <input type='text' placeholder='message here' />
      </div>
    )
  }
}
