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
          <cite>अध्याय {_this.props.chapterNumber}, श्लोक {item.audio}</cite>
          </blockquote>
        </div>
      );
    };
    var populateItems=function(texts){
        if(texts.length==0){
            return (<div>प्रतीक्षा गर्दै...</div>);
        }else{
            return texts.map(createItem);       
        }
    }
    return (
      <div className='chapterLines'>
        <div className='chapterLinesTitle'><h2>{this.props.title}</h2></div>
        <div>{ populateItems(this.props.texts) }</div>
      </div>
    );
  }
})
