var ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    React = require('react');

var history = ReactRouter.hashHistory;
//INDEX ROUTE OZNACZA ZE NIE EBDZIE NIC POZA TYM CO ZAWIERA SCIEZKA RODZIC
//<IndexRoute component={components.main}/>
module.exports = function(components) {
    return <Router history={history}>
        <Route path="/" component={components.main}>
            <Route path="topics/:id" component={components.topic}/>
            <Route path="images/:id" component={components.largeImage}/>
        </Route>
    </Router>
};

//<Route path="/" component={components.header}>
//    <IndexRoute component={components.main}>
//    </IndexRoute>
//    <Route path="topics/:id" component={components.header}/>
//    <Route path="dupa_test" component={components.topics}>
//    </Route>
//</Route>