import React, { Component } from 'react'
import Login from './Login'

export default class Landing extends Component {
  render () {
    return (
    	<div>
    		<h2>Landing Page</h2>
    		<p>This page is only shown to unauthenticated users.</p>
    		<p>first, login with github account</p>
    		<Login />
    	</div>
    	)
  }
}
