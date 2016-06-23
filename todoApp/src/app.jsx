var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase')
var baseUrl = 'https://fluxtest-49f41.firebaseio.com';
//var baseUrl = 'https://blistering-torch-4253.firebaseio.com';
var Header = require('./components/headerComponent');
var List = require('./components/listComponent.jsx');

var App = React.createClass({
    mixins: [ReactFire],
    componentWillMount: function () {
        //Pochodzi z reactFire
        var fb = new Firebase(baseUrl + '/items/');
        this.bindAsObject(fb, 'items');
        console.log(fb);
        //this.state.items zawiera dane
    },
    render: function () {
        console.log('state ', this.state);
        return <div className="row panel panel-default">
            <div className="col-md-8 col-md-offset-2">
                <h2 className="text-center">Do zrobienia</h2>
            </div>
            <Header storage={this.firebaseRefs.items}/>
            <List storage={this.firebaseRefs.items} />
        </div>
    }
});

ReactDOM.render(<App />, document.querySelector('.container'));
