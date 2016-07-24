var React = require('react');
var TopicsList = require('./topicsList.jsx')

module.exports = React.createClass({
    render: function () {
        return <div>
            <h1>MAIN</h1>
            {(function(){
                if(this.props.children){
                    return this.props.children
                    } else {
                    return <TopicsList />
                    }
                }.bind(this))()}
            {this.props.children}
        </div>
    }
});