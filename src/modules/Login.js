import React, { Component } from 'react'
import auth from './config/auth.js'
import {Icon} from 'react-fa'

export default class Login extends Component {
  constructor (props, context) {
    super(props)
  }

  componentWillMount () {
    console.log('[Login.js] called componentWillMount ()')
    this.context.router.replace('/home')
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
      <div className='grid-3-center_xs-1 login'>
        <button
          className='col-3_sm-10 login-btn'
          onClick={this._login.bind(this, 'twitter')}>
            <Icon className='login-icon' name='twitter' />Twitterでログイン
        </button>

        <button
          className='col-3_sm-10 login-btn'
          onClick={this._login.bind(this, 'facebook')}>
            <Icon className='login-icon' name='facebook-official' />Facebookでログイン
        </button>

        <button
          className='col-3_sm-10 login-btn'
          onClick={this._login.bind(this, 'github')}>
            <Icon className='login-icon' name='github' />Githubでログイン
        </button>
        {/*<button onClick={this._login.bind(this, 'facebook')}><Icon name='twitter' />Login with Facebook account</button>
        <button onClick={this._login.bind(this, 'github')}><Icon name='github' />Login with Github account</button>*/}
      </div>
    )
  }
}
Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}
