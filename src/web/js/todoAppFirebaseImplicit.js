var TodoList3 = React.createClass({
  render: function() {
    var _this = this;
    var createItem = function(item, index) {
      return (
        <div key={ index }>
          <div>{ item.TextNepali }</div>
          <hr/>
        </div>
      );
    };
    return <ul>{ this.props.texts.map(createItem) }</ul>;
  }
});

var TodoApp3 = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      texts: []
    };
  },

  componentWillMount: function() {
    var firebaseRef = firebase.database().ref('bishwageeta/chapters/0/texts');;
    this.bindAsArray(firebaseRef, 'texts');
  },

  render: function() {
    return (
      <div>
        <TodoList3 texts={ this.state.texts }/>
      </div>
    );
  }
});

ReactDOM.render(<TodoApp3 />, document.getElementById('todoApp3'));
