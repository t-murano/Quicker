import React, { Component } from 'react'

export default class HomeContent extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <img className='user-profile' src={this.props.user.icon} />
        <h2>Welcome, {this.props.user.name}!</h2>
        <h4>If you loggedIn, first view this screen.</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
}

HomeContent.propTypes = {
  // user: PropTypes.string.isRequired,
  // icon: PropTypes.string.isRequired
}
