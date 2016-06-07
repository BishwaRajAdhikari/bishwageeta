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
              width='50'
            />
          </blockquote>
        </div>
      );
    };
    return (
      <div className='chapterLines'>
        <div className='chapterLinesTitle'><h3>{this.props.title}</h3></div>
        <div><iframe src={this.props.audio} width="200" height="100" frameBorder="0"></iframe></div>
        <div>{ this.props.texts.map(createItem) }</div>
      </div>
    );
  }
})
