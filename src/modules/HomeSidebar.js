import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import ChatNew from './ChatNew'
import ChatJoin from './ChatJoin'
import Logout from './Logout'

export default class HomeSidebar extends Component {
  constructor (props) {
    super(props)
  }

  // makeNewChat
  render () {
    var sidebarClass = classNames({
      'sideClosed': true,
      'sideOpend': this.props.isToggled
    })
    return (
      <div className='side-bar'>
        <nav className={sidebarClass}>
          <ul>
            <li>
              <Logout user={this.props.user} />
            </li>
            <li>
              <ChatNew roomCreated={this.props.roomCreated} />
            </li>
            <li className='join'>
              <ChatJoin />
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

HomeSidebar.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  // user: PropTypes.object.isRequired,
  roomCreated: PropTypes.func.isRequired
}
