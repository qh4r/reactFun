var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase')
global.baseUrl = 'https://fluxtest-49f41.firebaseio.com';
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
        //Na potem
        fb.on('value', this.handleDataLoaded);
        //this.state.items zawiera dane
    },
    render: function () {
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
            {
                (function(){
                    if(!this.state.loadingComplete){
                        return;
                    }
                    if(!this.state.items){
                      return <h2 className="text-center">Nie dodano wpisów</h2>
                    } else {
                        return [
                            <button onClick={this.deleteCompleted} className="col-xs-2 col-xs-offset-7 btn btn-warning">
                                Usuń wykonane
                            </button>,
                            <button onClick={this.deleteAll} className="col-xs-2 col-xs-offset-1 btn btn-danger">
                            Usuń wszystkie
                        </button>]
                    }
                }.bind(this))()
            }

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
    },
    deleteAll: function(){
        this.firebaseRefs.items.remove();
    },
    deleteCompleted: function(){
        Object.keys(this.state.items).forEach(function(key){
            this.state.items[key].wasDone && this.firebaseRefs.items.child(key).remove();
        }.bind(this));
    }
});

ReactDOM.render(<App />, document.querySelector('.container'));
