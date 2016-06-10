import React from 'react'
import NavLink from './NavLink'
import { Sticky } from 'react-sticky'

export default React.createClass({
  render() {
    var chapters=[];
    for(var i=0;i<=17;i++){
      chapters.push(<li key={i}><NavLink to={'/अध्याय/'+i+'/अध्याय%20'+(i+1)}>{(i+1)}</NavLink></li>);
    }
    return (
      <div className='chapters'>
        <Sticky className='chaptersNavigation'>
          <div className='chapterTitle'>अध्याय</div>
          <ul className='chaptersLinks'>
            {chapters}
          </ul>
        </Sticky>
        {this.props.children}
      </div>
    )
  }
})
