import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import ChatNew from './ChatNew'
import ChatJoin from './ChatJoin'

import {Icon} from 'react-fa'

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
      <div>
        <nav className={sidebarClass}>
          <ul>
            <li>
              <div className='user-profile'>
                <img className='user-profile' src={this.props.user.icon} />

                <div className='user-profile-meta'>
                  <small>{this.props.user.name}</small>
                  <button>
                    <Icon className='login-icon' name='sign-out' />
                  </button>
                </div>
              </div>
            </li>
            {/*<li>
              <button>
                ユーザー設定
              </button>
            </li>*/}
            <li>
              <ChatNew roomCreated={this.props.roomCreated} />
            </li>
            <li className='join'>
              <ChatJoin />
            </li>
            {/*<li>
              <button>
                グループトーク退出
              </button>
            </li>*/}
            {/*<li>
              <button>
                グループトーク削除
              </button>
            </li>*/}
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
