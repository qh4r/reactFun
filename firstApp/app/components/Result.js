var React = require('react');

var Show = function(props){
    return (
        <pre>{JSON.stringify(props, 2, '\n')}</pre>
    )
}

var Result = function(props){
    return (
        <div>wynik
        <Show scores={props.scores} playersInfo={props.playersInfo} />
        </div>
    )
};

Result.propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    playersInfo: React.PropTypes.array.isRequired,
    scores: React.PropTypes.array.isRequired
};

module.exports = Result;