var React = require('react');

var Main = React.createClass({
    render: function(){
        return (
            <div className="main-container">
                MIAN
                {this.props.children}
            </div>
        )
    }
});

module.exports = Main;