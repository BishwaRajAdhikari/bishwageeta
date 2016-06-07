import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    var chapters=[];
    for(var i=0;i<=17;i++){
      chapters.push(<li key={i}><NavLink to={'/chapters/'+i+'/Chapter%20'+(i+1)}>{(i+1)}</NavLink></li>);
    }
    return (
      <div className='chapters'>
        <div className='chaptersNavigation'>
          <div><h4>CHAPTERS</h4></div>
          <ul className='chaptersLinks'>
            {chapters}
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
})
