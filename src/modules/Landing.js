import React, { Component } from 'react'
import Login from './Login'
// import Typing from './efx/Typing'

export default class Landing extends Component {
  render () {
    return (
      <div>
          <div className='grid landing-page'>
            <div className='col-12'>
              <div className='title-group'>
                <img src='assets/img/logo.jpg' />
                  <code>クイッカー</code>
                  <h2 className='jpn desc'>
                    気軽に参加できるグループメッセンジャー
                  </h2>
              </div>
              <Login />
            </div>
            <div className='col-12 deb-e'></div>
          </div>
      </div>
    )
  }
}
