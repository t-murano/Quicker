import React, { Component } from 'react'

import HomeHeader from './HomeHeader'
import HomeSidebar from './HomeSidebar'
import HomeContent from './HomeContent'

export default class Home extends Component {
  constructor (props, context) {
    super(props)
    this.state = {
      toggled: false
    }
  }

  /**
   * Mounting: Before rendering (no DOM yet)
   * Invoked once, immediately before the initial rendering occurs.
   */
  componentWillMount () {
    console.log('[Home.js] called componentWillMount ()')
  }

  /**
   * for toggle sidebar like a jQuery
   */
  _sideBarToggle () {
    let toggled = !this.state.toggled
    this.setState({
      toggled: toggled
    })
  }

  /**
   * recived from child
   */
  _watcheCreatedRoom (roomkey) {
    console.log('created ', roomkey)
  }

  render () {
    const { content } = this.props
    return (
       <div>
         <HomeHeader
          roomName={this.props.getRoom}
          toggleSideBar={this._sideBarToggle.bind(this)}/>
        <main className='grid'>
          <div className='col-3_sm-6_xs-6 side tablet-hide'>
            <HomeSidebar
              isToggled={this.state.toggled}
              user={this.props.user}
              roomCreated={this._watcheCreatedRoom.bind(this)} />
          </div>
          <div className='col-9_sm-12_xs-12 main'>
            { content || <HomeContent user={this.props.user} /> }
          </div>
        </main>
       </div>)
  }
}
// @FIXME
// Failed propType: Required prop `content` was not specified in `Home`.
// Check the render method of `RouterContext`.
Home.propTypes = {
  // user: PropTypes.any.isRequired
}
