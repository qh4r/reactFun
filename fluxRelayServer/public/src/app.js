import React from 'react';
import ReactDOM from 'react-dom';

// const Hello = React.createClass({
//   render: function(){
//     return React.createElement('h5', null, "No czesc!");
//   }
// });

const Hello = () => <h5>No cześć! ;)</h5>;

ReactDOM.render(<Hello/>/*React.createElement(Hello)*/, document.querySelector(".app"));

