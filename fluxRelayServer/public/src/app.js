import React from 'react';
import ReactDOM from 'react-dom';

const Hello = React.createClass({
  render: function(){
    return React.createElement('h5', null, "No czesc!");
  }
});

ReactDOM.render(React.createElement(Hello), document.querySelector(".app"));
