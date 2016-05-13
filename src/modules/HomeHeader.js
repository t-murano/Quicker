import React, { Component, PropTypes } from 'react'
import Logout from './Logout'

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
          <nav className='nav'>
            <div className='grid-spaceBetween'>

              <div className='col-3_sm-1_xs-4'></div>
              <div className='col-3_sm-8_xs-8'>
                <img className='header-logo'
                     onClick={this._handleMenuClick.bind(this)}
                     src='/assets/img/header-logo.jpg'
                />
              </div>
              <div className='col-2_sm-3_xs-4 mobile-hide'>
                <Logout user={this.props.user} />
              </div>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

HomeHeader.propTypes = {
  toggleSideBar: PropTypes.func.isRequired
}
