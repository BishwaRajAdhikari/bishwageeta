var ChapterNavigation = React.createClass({
    render: function(){
      var _this=this;
      return (
        <div>
          Chapter Navigation
        </div>
      );
    }
});

var Chapter = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      texts: []
    };
  },

  componentWillMount: function() {
    var firebaseRef = firebase.database().ref('bishwageeta/chapters/'+this.props.id+'/texts');;
    this.bindAsArray(firebaseRef, 'texts');
  },

  render: function() {
    var _this = this;
    return <ChapterLines title={'Chapter '+(this.props.id+1)} texts={ this.state.texts }/>
  }
});

var ChapterLines = React.createClass({
  render: function() {
    var _this = this;
    var createItem = function(item, index) {
      return (
        <div key={ index }>
          <div>Audio: { item.audio }</div>
          <div>Nepali: { item.TextNepali }</div>
          <div>Sanskrit: { item.TextSanskrit }</div>
          <hr/>
        </div>
      );
    };
    return (
      <div>
        <div>{this.props.title}</div>
        <ul>{ this.props.texts.map(createItem) }</ul>
      </div>
    );
  }
});

var Book = React.createClass({
  render: function() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ChapterNavigation/>
        <Chapter id={ 1 }/>
      </div>
    );
  }
});

ReactDOM.render(<Book title='Bishwa Geeta' />, document.getElementById('app'));
