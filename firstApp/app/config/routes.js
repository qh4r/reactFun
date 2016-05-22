var React = require('react'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main'),
    Home = require('../components/Home'),
    Away = require('../components/Away');

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            {/*
            RÓWNOZNACZNE ale łapie wszystko
            <Route path="/home" component={Home}></Route>
             */}
            <Route path="/away" component={Away}></Route>
        </Route>
    </Router>
);

module.exports = routes;