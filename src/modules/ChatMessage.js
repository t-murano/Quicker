import React, { Component } from 'react'

export default class ChatMessage extends Component {
  render () {
    return (
      <div>
        <ul>
          <li>{this.props.msg}</li>
        </ul>
      </div>
    )
  }
}
