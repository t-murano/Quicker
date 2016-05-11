import React, { Component, PropTypes } from 'react'
// import room from './config/room.js'
// import Logo from './Logo'

export default class HomeHeader extends Component {
  constructor (props) {
    super(props)
  }

  _handleMenuClick () {
    this.props.toggleSideBar()
  }
  render () {
    return (
      <div>
        <header>
          <button className='menu-icon'
                  onClick={this._handleMenuClick.bind(this)}>&#2393;
          </button>
          <h1>@taube<small>GroupMessages</small></h1>
          <button className='menu-icon'>&#2869;</button>
        </header>
      </div>
    )
  }
}

HomeHeader.propTypes = {
  toggleSideBar: PropTypes.func.isRequired
}
