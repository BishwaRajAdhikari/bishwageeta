import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

export default React.createClass({
  render: function() {
    var _this = this;
    var createItem = function(item, index) {
      return (
        <div key={ index }>
          <blockquote className='nepali'>
            { item.TextNepali }
            <div className='sanskrit'>
              { item.TextSanskrit }
            </div>
            <ReactAudioPlayer
              src= {"/src/imports/AudioNepali/"+_this.props.chapterNumber+"/" +item.audio+".m4a"}
              autoplay="false"
              preload='none'
              width='200'
            />
          <cite>Chapter {_this.props.chapterNumber}, Line {item.audio}</cite>
          </blockquote>
        </div>
      );
    };
    return (
      <div className='chapterLines'>
        <div className='chapterLinesTitle'><h2>{this.props.title}</h2></div>
        <div>{ this.props.texts.map(createItem) }</div>
      </div>
    );
  }
})
