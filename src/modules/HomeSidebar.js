import React, { Component } from 'react'
// import ChatNew from './ChatNew'

export default class HomeSidebar extends Component {
  _handleAction () {
    console.log('Created room')
  }
  render () {
    return (
      <div className='side-bar'>
        <nav>
          <ul>
            <li onClick={this._handleAction.bind(this)}>▶︎ createNewChat</li>
            <li>▶︎ joinChat</li>
            <li>▶︎ userSetting</li>
          </ul>
        </nav>
      </div>
    )
  }
}
