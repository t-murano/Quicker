import React, { Component, PropTypes } from 'react'

export default class ChatForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      msg: '',
      user: 'userex'
    }
  }
  _handleChange (e) {
    this.setState({
      msg: e.target.value
    })
  }
  _handleKeyPress (e) {
    if (e.key === 'Enter') {
      let msg = this.state.msg.trim()
      let user = this.state.user
      this.props.onCommentSubmit({
        msg: msg, user: user
      })
      this.setState({ msg: '' })
    }
  }
  render () {
    return (
      <div className='comment-form'>
        <input
          type='text'
          autoFocus='true'
          placeholder='message here'
          onChange={this._handleChange.bind(this)}
          value={this.state.msg}
          onKeyPress= {this._handleKeyPress.bind(this)}
        />
      </div>
    )
  }
}

ChatForm.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired
}
