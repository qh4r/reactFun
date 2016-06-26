var ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    React = require('react');

var history = ReactRouter.hashHistory;

module.exports = function(components) {
    return <Router history={history}>
        <Route path="/" component={components.header}>
            <IndexRoute component={components.main}/>
        </Route>
    </Router>
};