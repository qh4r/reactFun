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
    getInitialState: function(){
      return {
          loadingComplete: false
      }
    },
    componentWillMount: function () {
        //Pochodzi z reactFire
        var fb = new Firebase(baseUrl + '/items/');
        this.bindAsObject(fb, 'items');
        console.log(fb);
        //Na potem
        fb.on('value', this.handleDataLoaded);
        //this.state.items zawiera dane
    },
    render: function () {
        console.log('state ', this.state);
        return <div className="row panel panel-default">
            <div className="row">
            <div className="col-md-8 col-md-offset-2">
                <h2 className="text-center">Do zrobienia</h2>
            </div>
                </div>
            <Header storage={this.firebaseRefs.items} loaded={this.state.loadingComplete}/>
            <List onChecked={this.onChecked}
                  items={this.state.items}
                  loaded={this.state.loadingComplete}
                  deleteClick={this.onDelete}/>
        </div>
    },
    handleDataLoaded: function(){
        this.setState({
            loadingComplete: true
        })
    },
    onChecked: function (key, value) {
        this.firebaseRefs.items.child(key).update({
            wasDone: value
        });
    },
    onDelete: function(key){
        (function(element){
            element && element.remove();
        })(this.firebaseRefs.items.child(key));
    }
});

ReactDOM.render(<App />, document.querySelector('.container'));
