import React from 'react'
import ReactPlayer from 'react-player'

export default React.createClass({
  render: function() {
    function logPlay(myval){
      ga.event({
          category: 'AudioPlay',
          action:myval.chapter,
          label: myval.line
        });        
    }
    function getconfig(){
        return {'autoplay':false};
    }
    var _this = this;
    var createItem = function(item, index) {
      return (
        <div key={ index }>
          <blockquote className='nepali'>
            { item.TextNepali }
            <div className='sanskrit'>
              { item.TextSanskrit }
            </div>
            <ReactPlayer 
                url={"/src/imports/AudioNepali/"+_this.props.chapterNumber+"/" +item.audio+".m4a"} 
                playing={false}
                controls={true}
                fileConfig={{attributes:{preload:'none'}}}
                width='500'
                height='50'
                onStart={logPlay.bind(undefined,{chapter:_this.props.chapterNumber.toString(),line:item.audio})}
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
