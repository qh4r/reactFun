var React = require('react'),
    Result = require('../components/Result'),
    battleHelpers = require('../utils/battleHelpers');

var ResultContainer = React.createClass({
    getInitialState: function () {
        return {
            isLoading: true,
            scores: []
        }
    },
    componentDidMount: function () {
        console.log(this.props.location.state.playersInfo);
        battleHelpers.fight(this.props.location.state.playersInfo)
            .then((scores) => {
                this.setState({
                    isLoading: false,
                    scores: scores
                });
            })
            .catch(function (err) {
                console.log('Error ' + err);
            })
    },
    render: function () {
        return (
            <div>
                <Result
                    playersInfo={this.props.location.state.playersInfo}
                    isLoading={this.state.isLoading}
                    scores={this.state.scores}/>
            </div>
        )
    }
});

module.exports = ResultContainer;