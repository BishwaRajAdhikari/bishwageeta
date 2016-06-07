import React from 'react'
import ChapterLines from './ChapterLines.js';
var firebaseRef=null;
export default React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      texts: []
    };
  },

  componentWillMount: function() {
    firebaseRef = firebase.database().ref('bishwageeta/chapters/'+this.props.params.chapterIndex+'/texts');;
    this.bindAsArray(firebaseRef, 'texts');
  },

  componentWillReceiveProps: function(nextProps) {
    if(this.props.params.chapterIndex===nextProps.params.chapterIndex) return;
    this.unbind("texts");
    firebaseRef = firebase.database().ref('bishwageeta/chapters/'+nextProps.params.chapterIndex+'/texts');;
    this.bindAsArray(firebaseRef, 'texts');
  },

  render: function() {
    var _this = this;
    return <ChapterLines title={this.props.params.chapterName} chapterNumber={this.props.params.chapterIndex+1} texts={ this.state.texts } audio={"https://www.youtube.com/embed/videoseries?list=PL426831BC08A165DC&test="+this.props.params.chapterName}/>
  }
})
