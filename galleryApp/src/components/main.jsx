var React = require('react');

module.exports = React.createClass({
    render: function(){
        return <div>
            <h1>Nagłówek</h1>
            {this.props.children}
        </div>
    }
});