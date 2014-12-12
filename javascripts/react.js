(function(R){
  "use strict";
  var MemberBox = R.createClass({
    render: function() {
      return (
        <div className="hello">
          <div className="member-box input-group">
            <label className="input-group-addon">Nom du membre</label>
            <input type="text" className="form-control" />
          </div>
          <div className="member-box input-group">
            <label className="input-group-addon">Email du membre</label>
            <input type="text" className="form-control" />
          </div>
        </div>
      );
    }
  });

  var MembersList = R.createClass({
    getInitialState: function() {
      return  {count: 1};
    },
    handleClick: function() {
      this.setState({count: this.state.count + 1});
    },
    render: function() {
      var boxes = [];
      for(var i = 0; i < this.state.count; i++) {
        boxes.push(<MemberBox />);
      }
      return (
        <div>
          {boxes}
          <span className="add" onClick={this.handleClick}>Ajouter</span>
        </div>
      );
    }
  });

  var QuestionBox = R.createClass({
    render: function() {
      return (
        <div>
          <div className="question-box input-group">
            <label className="input-group-addon">Question</label>
            <input type="text" className="form-control" />
          </div>
          <div className="answer-box input-group">
            <label className="input-group-addon">Réponse</label>
            <input type="text" className="form-control" />
          </div>
        </div>
      );
    }
  });

  var QuestionsList = R.createClass({
    getInitialState: function() {
      return  {count: 1};
    },
    handleClick: function() {
      this.setState({count: this.state.count + 1});
    },
    render: function() {
      var boxes = [];
      for(var i = 0; i < this.state.count; i++) {
        boxes.push(<QuestionBox />);
      }
      return (
        <div>
          {boxes}
          <span className="add" onClick={this.handleClick}>Ajouter</span>
        </div>
      );
    }
  });

  R.render(
    <MembersList />,
    document.getElementById('membres')
  );

  R.render(
    <QuestionsList />,
    document.getElementById('questions')
  );
})(React);
