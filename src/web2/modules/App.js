import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>विश्वगीता</h1>
        {this.props.children}
      </div>
    )
  }
})
