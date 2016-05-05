import React, { Component } from 'react'
import auth from './config/auth.js'

export default class Login extends Component {
  constructor (props, context) {
    super(props)
  }
  // _login:
  // login then go to main page
  // @Read also:
  // Identical to push except replaces the current history entry with a new one.
  // https://github.com/reactjs/react-router/blob/master/docs/API.md#replacepathorloc
  _login () {
    auth.login(data => {
      this.context.router.replace('/home')
      console.log(data.github)
    })
  }
  render () {
    return (
      <div className='login'>
        <button onClick={this._login.bind(this)}>Github Login</button>
      </div>
    )
  }
}
Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}
