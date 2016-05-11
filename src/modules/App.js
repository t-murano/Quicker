import React, { Component, PropTypes } from 'react'
import Rebase from 're-base'

import auth from './config/auth'
import room from './config/room'
import user from './config/user'

// import Logout from './Logout'
// import Chat from './Chat'

const base = Rebase.createClass('https://taube.firebaseio.com')

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: auth.loggedIn(),
      messages: [],
      isRoom: false,
      thisRoom: ''
    }
  }
	/**
   * Mounting: Before rendering (no DOM yet)
   * Invoked once, immediately before the initial rendering occurs.
   */
   componentWillMount () {
     console.log('[App] called componentWillMount ()')
     auth.onChange = this._updateAuth.bind(this)
     room.onChange = this._updateRoom.bind(this)
     user.onChange = this._updateUser.bind(this)
   }

  _updateAuth (loggedIn) {
    this.setState({
      loggedIn: !!loggedIn
    })
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
    this.setState({
      thisRoom: room ? room : null
    })
  }

  componentDidUpdate () {
    console.log('[App] called componentDidUpdate ()')
  }

  _checkState () {
    console.log(this.state)
  }

  _passingUser () {
    return base.getAuth().github
  }

  _paddingMessages () {
    return this.state.messages
  }

  _paddingRoomToken () {
    return this.state.thisRoom
  }

  render () {
    return (
      <div>
        <button className='deb'
                onClick={this._checkState.bind(this)}>
                App.js level => this.state()
        </button>

        { this.props.children &&
          React.cloneElement(this.props.children, {
            chats: this.state.messages,
            getUser: this._passingUser.bind(this),
            getRoom: this.state.thisRoom
          })
        }
      </div>
    )
  }
}
App.propTypes = {
  children: PropTypes.any
}
