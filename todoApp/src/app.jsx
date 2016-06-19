var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase')
var baseUrl = 'https://fluxtest-49f41.firebaseio.com';
//var baseUrl = 'https://blistering-torch-4253.firebaseio.com';

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
        return <div>
            <h1>
                Hello!
            </h1>
        </div>
    }
});

ReactDOM.render(<App />, document.querySelector('.container'));
