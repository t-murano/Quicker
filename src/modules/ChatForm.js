import React, { Component, PropTypes } from 'react'

export default class ChatForm extends Component {
  constructor (props) {
    super(props)
    this.state = { msg: '' }
  }
  _handleChange (e) {
    this.setState({
      msg: e.target.value
    })
  }
  _handleKeyPress (e) {
    if (e.key === 'Enter') {
      let msg = this.state.msg.trim()
      this.props.onCommentSubmit({
        msg: msg
      })
      this.setState({ msg: '' })
    }
  }
  render () {
    return (
      <div className='comment-form'>
        <input
          type='text'
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
