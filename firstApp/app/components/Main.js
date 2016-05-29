require('../styles/index.css');

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var React = require('react');

var Main = React.createClass({
    render: function () {
        return (
            <div className="main-container">
                <ReactCSSTransitionGroup
                    transitionName='appear'
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
});

module.exports = Main;