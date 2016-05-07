import React, { Component } from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import auth from './config/auth.js'

export default class Logout extends Component {
  constructor (props, context) {
    super(props)
  }
  // _logout:
  // logout then change current url
  // @Read also:
  // Identical to push except replaces the current history entry with a new one.
  // https://github.com/reactjs/react-router/blob/master/docs/API.md#replacepathorloc
	_logout () {
    auth.logout(data => {
      this.context.router.replace('/')
    })
  }
  render () {
    let user = this.props.user.displayName
    let userIconUrl = this.props.user.profileImageURL
    return (
    	<div>
        <button onClick={this._logout.bind(this)}>
        <img src={userIconUrl} className='user-profile menu-user-icon' />
          {user} Logout
        </button>
    	</div>
    	)
  }
}

Logout.contextTypes = {
  router: React.PropTypes.object.isRequired
}
