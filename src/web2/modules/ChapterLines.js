import React from 'react'

export default React.createClass({
  render: function() {
    var _this = this;
    var createItem = function(item, index) {
      return (
        <div key={ index }>
          <blockquote className='nepali'>
            Nepali: { item.TextNepali }
            <div className='sanskrit'>
              Sanskrit: { item.TextSanskrit }
            </div>
            <cite>Audio: { item.audio }</cite>
          </blockquote>
        </div>
      );
    };
    return (
      <div className='chapterLines'>
        <div className='chapterLinesTitle'><h3>{this.props.title}</h3></div>
        <div><iframe src="https://www.youtube.com/embed/videoseries?list=PL426831BC08A165DC" width="200" height="100" frameBorder="0"></iframe></div>
        <div>{ this.props.texts.map(createItem) }</div>
      </div>
    );
  }
})
