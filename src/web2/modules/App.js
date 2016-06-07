import React from 'react'
import NavLink from './NavLink'
import GoogleAnalytics from 'react-g-analytics'

export default React.createClass({
  render() {
    return (
      <div>
        
        <GoogleAnalytics id="UA-78893348-1" />
        <h1>विश्वगीता</h1>
        {this.props.children}
      </div>
    )
  }
})
