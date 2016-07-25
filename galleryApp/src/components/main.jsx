var React = require('react');

var TopicsList = require('./topicsList.jsx'),
    Header = require('./header');

module.exports = React.createClass({
    render: function () {
        return <Header>
            {(function(){
                if(this.props.children){
                    return this.props.children
                    } else {
                    return <TopicsList />
                    }
                }.bind(this))()}
        </Header>
    }
});