import React, { Component } from 'react'
import auth from './config/auth.js'

export default class Login extends Component {
  constructor (props, context) {
    super(props)
  }
  /**
   * login
   * Identical to push except replaces the current history entry with a new one.
   *
   * https://github.com/reactjs/react-router/blob/master/docs/API.md#replacepathorloc
   */
  _login (authType) {
    auth.login(authType, data => {
      this.context.router.replace('/home')
    })
  }
  render () {
    return (
      <div className='login'>
        <button onClick={this._login.bind(this, 'twitter')}>Login with Twitter account</button>
        <button onClick={this._login.bind(this, 'facebook')}>Login with Facebook account</button>
        <button onClick={this._login.bind(this, 'github')}>Login with Github account</button>
      </div>
    )
  }
}
Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}
