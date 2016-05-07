import React, { Component } from 'react'
import Rebase from 're-base'

import HomeHeader from './HomeHeader'
import HomeSidebar from './HomeSidebar'
import HomeContent from './HomeContent'

const base = Rebase.createClass('https://taube.firebaseio.com')

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      toggled: false
    }
  }
  /**
   * Mounting: Before rendering (no DOM yet)
   * Invoked once, immediately before the initial rendering occurs.
   */
  componentWillMount() {
    console.log('[Home] called componentWillMount ()')
   }
   /**
    * for toggle sidebar like a jQuery
    */
   _sideBarToggle () {
     let toggled = !this.state.toggled
     this.setState({
       toggled : toggled
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
         <HomeSidebar
           isToggled={this.state.toggled}
           user={this.props.getUser()}
           roomCreated={this._watcheCreatedRoom.bind(this)}/>
         <main>
           { content || <HomeContent user={this.props.getUser()} /> }
         </main>
       </div>
     )
   }
}
