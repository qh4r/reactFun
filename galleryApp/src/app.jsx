var React = require('react');
var ReactDOM = require('react-dom');
var credentials = require('./imgurCredentials');

var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
      Hello! {credentials.id}
    </h1>
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
