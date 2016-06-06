import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Home from './modules/Home'
import Chapters from './modules/Chapters'
import Chapter from './modules/Chapter'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Chapters}/>
      <Route path="/chapters" component={Chapters}>
        <Route path="/chapters/:chapterIndex/:chapterName" component={Chapter}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
