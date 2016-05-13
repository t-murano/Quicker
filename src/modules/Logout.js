import React, { Component } from 'react'
import auth from './config/auth.js'
import {Icon} from 'react-fa'

export default class Logout extends Component {
  constructor (props, context) {
    super(props)
  }
  /**
   * logout then change current url
   * Identical to push except replaces the current history entry with a new one.
   *
   * https://github.com/reactjs/react-router/blob/master/docs/API.md#replacepathorloc
   */
  _logout () { auth.logout(() => this.context.router.push('/')) }

  render () {
    return (
      <div>
        <button
          onClick={this._logout.bind(this)}
          className='login-btn nav-btn'>
          <Icon className='login-icon' size='2x' name='sign-out' />
          <span className='tablet-hide-inline logout-text'>ログアウト</span>
        </button>
      </div>
    )
  }
}

Logout.contextTypes = {
  router: React.PropTypes.object.isRequired
}
