import React, { Component, PropTypes } from 'react'
import moment from 'moment'

export default class ChatForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      msg: ''
    }
  }

  componentWillMount () {
    console.log('[CharForm] called componentWillMount ()')
  }

  _handleChange (e) {
    this.setState({
      msg: e.target.value
    })
  }

  _handleKeyPress (e) {
    let time = moment().format('h:mm a')
    if (e.key === 'Enter') {
      let msg = this.state.msg.trim()
      this.props.onCommentSubmit({
        msg: msg,
        time: time
      })
      this.setState({ msg: '' })
    }
  }

  render () {
    return (
      <div className='msg-form'>
        <input
          type='text'
          autoFocus='true'
          placeholder='メッセージを入力する'
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
