import React, { Component, PropTypes } from 'react'
import Rebase from 're-base'

import auth from './config/auth'
import user from './config/user'

const base = Rebase.createClass('https://quicker-dev.firebaseio.com')

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: auth.loggedIn(),
      user: {},
      messages: [],
      isRoom: false
    }
  }

  _updateAuth (loggedIn, user) {
    this.setState({
      loggedIn: !!loggedIn,
      user: user
    })
  }

  /**
   * Mounting: Before rendering (no DOM yet)
   * Invoked once, immediately before the initial rendering occurs.
   */
   componentWillMount () {
     console.log('[App.js] called componentWillMount ()')
     auth.onChange = this._updateAuth.bind(this)
     user.onChange = this._updateUser.bind(this)
     auth.login() // @NOTE: this is key
   }

  _updateUser (isRoom) {
    this.setState({
      isRoom: !!isRoom
    })
  }

  _updateRoom (room) {
		/*
     * Here we call 'bindToState', which will update
     * our local 'messages' state whenever our 'chats'
     * Firebase endpoint changes.
     */
    base.bindToState(room, {
      context: this,
      state: 'messages',
      asArray: true
    })
    // this.setState({
    //   thisRoom: room ? room : null
    // })
  }

  /**
   * Warning! infinity loop
   */
  componentDidUpdate () {
    console.log('[App.js] called componentDidUpdate ()')
  }

  /**
   * only use deb
   */
  _debState () {
    console.log('THIS.STATE', this.state)
    console.log('LOCALSTORAGE', localStorage)
    console.log('SESSIONSTORAGE', sessionStorage)
  }

  render () {
    let debugState = { position: 'fixed', right: 0, color: 'gold', cursor: 'pointer', display: 'flex', fontFamily: 'menlo', justifyContent: 'flex-end' }
    return (
      <div>
        <span style={debugState} onClick={this._debState.bind(this)}>*</span>
        { this.props.children &&
          React.cloneElement(this.props.children, {
            chats: this.state.messages,
            user: this.state.user
            // getRoom: this.state.currentRoom
          })
        }
      </div>
    )
  }
}
App.propTypes = {
  children: PropTypes.any
}
