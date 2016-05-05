import React, { Component } from 'react'
import Rebase from 're-base'
import auth from './config/auth'
import Logout from './Logout'

const base = Rebase.createClass('https://taube.firebaseio.com')

export default class App extends Component {
	constructor (props) {
 		super(props)
    this.state = {
      loggedIn: auth.loggedIn(),
    }
  }
  _updateAuth (loggedIn) {
    this.setState({
      loggedIn: !!loggedIn
    })
  }
  componentWillMount() {
    auth.onChange = this._updateAuth.bind(this)
  }
  _checkState () {
    console.log(this.state)
  }
  render () {
    return (
      <div>
        <button className='deb' onClick={this._checkState.bind(this)}>this.state()</button>
        {this.state.loggedIn ? (<Logout />) : null }
        {this.props.children}
      </div>
    )
  }
}
