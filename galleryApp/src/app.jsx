var React = require('react');
var ReactDOM = require('react-dom');
var credentials = require('./imgurCredentials');
var Main = require('./components/main');
var Header = require('./components/header.jsx');
var Router = require('./routes')({
    main: Main,
    header: Header,
    topics: require('./components/topicsList'),
    topic: require('./components/topic')
});

ReactDOM.render(Router, document.querySelector('.container'));
