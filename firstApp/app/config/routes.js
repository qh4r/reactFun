var React = require('react'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main'),
    Home = require('../components/Home'),
    Away = require('../components/Away'),
    QuestionContainer = require('../containers/QuestionContainer'),
    StartFightContainer = require('../containers/StartFightContainer');

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            {/*
            RÓWNOZNACZNE ale łapie wszystko
            <Route path="/home" component={Home}></Route>
             <Route path="/away" component={Away}></Route>
             */}
            <Route path="firstPlayer" header="Gracz 1" component={QuestionContainer}/>
            <Route path="secondPlayer/:firstPlayer" header="Gracz 2"  component={QuestionContainer}/>
            <Route path="fight" component={StartFightContainer} />
        </Route>
    </Router>
);

module.exports = routes;