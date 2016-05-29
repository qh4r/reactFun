var React = require('react');
require('../styles/bootstrap.css');
require('../styles/index.css');

var Loader = React.createClass({
    propTypes: {
      delay: React.PropTypes.number
    },
    getDefaultProps: function(){
        return {
            delay: 400
        }
    },
    getInitialState: function() {
        return {
            text: 'Loading'
        }
    },
    componentDidMount(){
        var restartCheck = 'Loading...'.length
        this.interval = setInterval(function(){
            if(this.state.text.length === restartCheck){
                return this.setState({
                    text: 'Loading'
                })
            }
            return this.setState({
                text: this.state.text+'.'
            })
        }.bind(this), this.props.delay);
    },
    componentWillUnmount: function(){
        clearInterval(this.interval);
    },
    render: function(){
        return(
            <div className="container content">
                <p>{this.state.text}</p>
            </div>
        )
    }
});

module.exports = Loader;