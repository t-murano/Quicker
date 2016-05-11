import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './modules/App'
import Landing from './modules/Landing'
import Home from './modules/Home'
import Chat from './modules/Chat'

import auth from './modules/config/auth.js'

function requireAuth (nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Landing} />
      <Route path='home' component={Home} onEnter={requireAuth}>
        <Route path=':chatRoomKey' components={{ content: Chat }} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
