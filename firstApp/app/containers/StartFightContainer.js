var React = require('react');
var StartFight = require('../components/StartFight');
var apiHelpers = require('../utils/apiHelpers');
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
    componentWillMount: function () {
        console.log('will mount')
    },
    componentWillUnmount: function () {
        console.log('will mount')
    },
    componentDidMount: function () {
        console.log('did mount')
        var query = this.props.location.query;
        apiHelpers.getUsersInfo([query.firstPlayer, query.secondPlayer])
            .then((players)=> {
                console.log(players);
                this.setState({
                    isLoading: false,
                    playersInfo: players
                });
            });
        //RÓWNOWAŻNE
        //.then(function(players){
        //   console.log(players);
        //    this.setState({
        //        isLoading: false
        //    });
        //}.bind(this));
    },
    render: function () {
        return (
            <StartFight isLoading={this.state.isLoading}
                        playersInfo={this.state.playersInfo}/>
        )
    }
});

module.exports = StartFightContainer;