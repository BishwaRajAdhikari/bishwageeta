var ChapterNavigation = React.createClass({
    getInitialState: function() {
      return {
        current: 1
      };
    },
    navigateTo: function navigateTo(newValue){
      var _this=this;
      console.log("ChapterNavigation navigateTo",this,this.state,newValue);
      this.state.current=newValue;
      this.render();
    },
    render: function(){
      var _this=this;
      console.log("ChapterNavigation render",this.state,_this.state);
      return (
        <div>
          <div>
            Chapter Navigation
            <a href="#" onClick={this.navigateTo.bind(this,1)}>1</a> |
            <a href="#" onClick={this.navigateTo.bind(this,2)}>2</a> |
          </div>
          <hr/>
          <ChapterContainer title={'Chapter '+this.state.current} id={ this.state.current }/>
        </div>
      );
    }
});

var ChapterContainer = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      texts: []
    };
  },

  componentWillMount: function() {
    console.log("ChapterContainer this.props",this.props);
    var firebaseRef = firebase.database().ref('bishwageeta/chapters/'+this.props.id+'/texts');;
    this.bindAsArray(firebaseRef, 'texts');
  },

  render: function() {
    var _this = this;
    return <ChapterLines title={this.props.title} texts={ this.state.texts }/>
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
      </div>
    );
  }
});

var onChange = function () {
  ReactDOM.render(<Book title='Bishwa Geeta' />, document.getElementById('app'));
};

onChange();
