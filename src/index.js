import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './modules/App'
import Landing from './modules/Landing'
import Home from './modules/Home'
import HomeSidebar from './modules/HomeSidebar'
import HomeContent from './modules/HomeContent'

import auth from './modules/config/auth.js'

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={Landing} />
      <Route path="home" component={Home} onEnter={requireAuth} />
    </Route>
  </Router>
), document.getElementById('app'))

// render((
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//     	<IndexRoute component={Landing} />
//       <Route path="home" component={Home} onEnter={requireAuth}>
//         <Route path=":menu" components={{ content: HomeContent, sidebar: HomeSidebar}}></Route>
//       </Route>
//     </Route>
//   </Router>
// ), document.getElementById('app'))
