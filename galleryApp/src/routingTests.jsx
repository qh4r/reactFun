var React = require('react');
var ReactDOM = require('react-dom');
var credentials = require('./imgurCredentials');
var ReactRouter = require('react-router');

//Router (nawiguje)
var Router = ReactRouter.Router;

//konfiguracja routera - routing
var Route = ReactRouter.Route;

var Hello = React.createClass({
    render: function () {
        return <div className="red">
            {this.props.children}
        </div>
    }
});

var Test1 = React.createClass({
    render: function () {
        return <div>
            <h1>Pierwszy element!</h1>
            <br />
            {this.props.children}
        </div>
    }
});

var Test2 = React.createClass({
    render: function () {
        return <div>
            <h2>Drugi element!</h2>
            <br />
            {this.props.children}
        </div>
    }
});

var router =
    <Router>
        <Route path="/" component={Hello}>
            <Route path="1" component={Test1}>
                <Route path="1" component={Test1}/>
                <Route path="2" component={Test2}/>
            </Route>
            <Route path="2" component={Test2}>
                <Route path="1" component={Test1}/>
                <Route path="2" component={Test2}/>
            </Route>
        </Route>
    </Router>;


ReactDOM.render(router, document.querySelector('.container'));
