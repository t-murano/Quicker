import React, { Component, PropTypes } from 'react'

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
                  onClick={this._handleMenuClick.bind(this)}>menu
          </button>
          <h1>Quicker<small>: GroupMessages</small></h1>
        </header>
      </div>
    )
  }
}

HomeHeader.propTypes = {
  toggleSideBar: PropTypes.func.isRequired
}
