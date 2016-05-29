var React = require('react');
require('../styles/bootstrap.css');
require('../styles/index.css');
var PlayerDetails = require('../components/PlayerDetails'),
    PlayerDetailsWrapper = require('../components/PlayerDetailsWrapper'),
    Link = require('react-router').Link,
    Loader = require('./Loader');


var ResultBody  = function (props) {
    return (
        <div className="jumbotron col-sm-12 text-center transparentBg">
            <h1>{props.header}</h1>
            {props.children}
            <div className="col-sm-12 space">
                <Link to='/firstPlayer'>
                    <button className='btn btn-lg btn-danger'>Od początku</button>
                </Link>
            </div>
        </div>
    )
};

var Result = function (props) {
    if(props.isLoading){
        return (
            <Loader delay={100} />
        )
    }

    if(props.scores[0] === props.scores[1]){
        return (
            <ResultBody header="Remis">
            </ResultBody>
        )
    }
    var winnerIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    return (
        <ResultBody header="Wyniki">
            <div className="col-sm-8 col-sm-offset-2">
                <PlayerDetailsWrapper displayName="Zwycięzca">
                    <PlayerDetails score={props.scores[winnerIndex] || 0} user={props.playersInfo[winnerIndex]}/>
                </PlayerDetailsWrapper>
                <PlayerDetailsWrapper displayName="Przegryw">
                    <PlayerDetails score={props.scores[1-winnerIndex] || 0} user={props.playersInfo[1-winnerIndex]}/>
                </PlayerDetailsWrapper>
            </div>
        </ResultBody>
    )
};

Result.propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    playersInfo: React.PropTypes.array.isRequired,
    scores: React.PropTypes.array.isRequired
};

module.exports = Result;