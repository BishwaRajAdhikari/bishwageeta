import React from 'react'
import NavLink from './NavLink'
import { StickyContainer } from 'react-sticky'
import ga from 'react-ga';
ga.initialize('UA-78893348-1');

export default React.createClass({
  render() {
    function logPlay(){
      ga.event({
          category: 'SocialMedia',
          action:'Visit',
          label: 'Facebook'
        });
    }
    return (
      <StickyContainer>
        <div className='title'>
          विश्वगीता
          <div className='subTitle'>Bishwa Geeta</div>
          <div className='shareThis'>
            <a target="_blank" title="follow me on facebook" href="https://www.facebook.com/bishwa.r.adhikari" onClick={logPlay} target="_blank">
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
      </StickyContainer>
    )
  }
})
