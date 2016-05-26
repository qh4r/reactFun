var React = require('react');
require('../styles/bootstrap.css');
require('../styles/index.css');

var PlayerDetails = require('./PlayerDetails');
var PlayerDetailsWrapper = require('./PlayerDetailsWrapper');
var Link = require('react-router').Link;

//function show (obj){
//    return (
//        <pre>{JSON.stringify(obj, null, '\n')}</pre>
//    )
//}
//
//var StartFight = function(props){
//    return (
//        <div>{props.isLoading?<p> LOADING </p>: <p> {show(props)} </p>}</div>
//    )
//};

//ODPOWIEDNIK FUNKCYJNY u GORY
//NA DOLE KOMPONENT
//NAZWY KOMPONENTOW MUSZA ZACZYNAC SIE OD DUZEJ LITERY!!!!!

var Show = function (obj) {
    return (
        <pre>{JSON.stringify(obj, null, '\n')}</pre>
    )
};
//
// var StartFight = function (props) {
//     return (
//         <div>{props.isLoading ? <p> LOADING </p> :
//             <Show data={props}></Show>
//         }</div>
//     )
// };

var StartFight = function (props) {
    return (
        props.isLoading === true ?
            <p>Wczytywanie...</p> :
            <div className="jumbotron col-sm-12 text-center transparentBg">
                <h1>Potwierdź Graczy</h1>
                <div className="col-sm-8 col-sm-offset-2">
                    <PlayerDetailsWrapper displayName="Gracz 1">
                        <PlayerDetails user={props.playersInfo[0]}> </PlayerDetails>
                    </PlayerDetailsWrapper>
                    <PlayerDetailsWrapper displayName="Gracz 2">
                        <PlayerDetails user={props.playersInfo[1]}> </PlayerDetails>
                    </PlayerDetailsWrapper>
                </div>
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-sm-12 space">
                        <button type="button" className="btn btn-lg btn-success" onClick={props.handleFightInit}>
                            Rozpocznij
                        </button>
                    </div>
                    <div className="col-sm-12 space">
                        <Link to="/firstPlayer">
                            <button type="button" className="btn btn-lg btn-danger">
                                Wybierz innych
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
    )
};

StartFight.propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    playersInfo: React.PropTypes.array.isRequired,
    handleFightInit: React.PropTypes.func.isRequired
};


module.exports = StartFight;