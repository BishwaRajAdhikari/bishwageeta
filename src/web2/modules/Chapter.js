import React from 'react'
import ChapterLines from './ChapterLines.js';
var firebaseRef=null;
export default React.createClass({
  mixins: [ReactFireMixin],

  getChapterIndex: function(propsChapter){
    return (parseInt(propsChapter)-1).toString();
  },

  getInitialState: function() {
    return {
      texts: []
    };
  },

  componentWillMount: function() {
    firebaseRef = firebase.database().ref('bishwageeta/chapters/'+this.getChapterIndex(this.props.params.chapterIndex)+'/texts');;
    this.bindAsArray(firebaseRef, 'texts');
  },

  componentWillReceiveProps: function(nextProps) {
    if(this.getChapterIndex(this.props.params.chapterIndex)===this.getChapterIndex(nextProps.params.chapterIndex)) return;
    this.unbind("texts");
    firebaseRef = firebase.database().ref('bishwageeta/chapters/'+this.getChapterIndex(nextProps.params.chapterIndex)+'/texts');;
    this.bindAsArray(firebaseRef, 'texts');
  },

  render: function() {
    var _this = this;
    return <ChapterLines title={this.props.params.chapterName} chapterNumber={this.props.params.chapterIndex} texts={ this.state.texts } audio={"https://www.youtube.com/embed/videoseries?list=PL426831BC08A165DC&test="+this.props.params.chapterName}/>
  }
})
