var React = require('react');

module.exports = React.createClass({
    render: function(){
        return <div>
            To obrazek: {this.props.params.id}
        </div>
    }
});