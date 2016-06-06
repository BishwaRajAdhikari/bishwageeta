import React from 'react'
import NavLink from './NavLink'
import About from './About'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Bishwa Geeta</h1>
        {this.props.children}
        <About/>
      </div>
    )
  }
})
