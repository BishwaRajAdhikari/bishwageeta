import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <div className='title'>
          विश्वगीता
          <div className='subTitle'>Bishwa Geeta</div>
          <div className='shareThis'>
            <a target="_blank" title="follow me on facebook" href="https://www.facebook.com/bishwa.r.adhikari" target="_blank">
              <img alt="follow me on facebook" src="https://c866088.ssl.cf3.rackcdn.com/assets/facebook30x30.png" border="0"/>
            </a>
          </div>
        </div>
        {this.props.children}
        <hr className="style-two"/>
        <div className="coverpage">
          <img src="coverpage.jpg"/>
        </div>
        <hr className='style-two'/>
        <div className='footer'>
          Copyright &copy; Bishwa Raj Adhikari, 2016.
        </div>
      </div>
    )
  }
})
