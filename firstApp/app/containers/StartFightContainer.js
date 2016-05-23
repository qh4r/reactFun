var React = require('react');
var StartFight = require('../components/StartFight')
var StartFightContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        console.log('init state')
        return {
            isLoading: true,
            playersInfo: []
        }
    },
    componentWillMount: function(){
      console.log('will mount')
    },
    componentWillUnmount: function(){
        console.log('will mount')
    },
    componentDidMount: function () {
        console.log('did mount')
        var query = this.props.location.query;
        console.log(query);
        setTimeout(() => {
           this.setState({
               isLoading: false
           });
        }, 2000);
    },
    render: function () {
        return (
            <StartFight isLoading={this.state.isLoading}
                        playersInfo={this.state.playersInfo}/>
        )
    }
});

module.exports = StartFightContainer;