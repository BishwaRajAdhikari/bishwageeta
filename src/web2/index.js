import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Home from './modules/Home'
import Chapters from './modules/Chapters'
import Chapter from './modules/Chapter'
import ga from 'react-ga';
ga.initialize('UA-78893348-1');
function cleanpath(windowlocation){
    var sanitized=windowlocation;
    if(sanitized.indexOf('#')==-1){
        return '/';
    }
    else{
        sanitized=sanitized.substr(sanitized.indexOf('#')+1,sanitized.length-1);
    }
    return sanitized.split('?')[0];
}
function logPageView() {
  ga.pageview(cleanpath(window.location.hash));
}

render((
  <Router history={hashHistory} onUpdate={logPageView}>
    <Route path="/" component={App}>
      <IndexRoute component={Chapters}/>
      <Route path="/chapters" component={Chapters}>
        <Route path="/अध्याय/:chapterIndex/:chapterName" component={Chapter}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
