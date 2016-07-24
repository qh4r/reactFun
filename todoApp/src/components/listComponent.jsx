var React = require('react');
var Firebase = require('firebase');
var ReactFire = require('reactfire');
//var plyfil = require('../libs/objectKeyPolyfil.js');

var ListElement = React.createClass({
        mixins: [ReactFire],
        //DEMONSTRACJA ALTERNATYWNA
        //TO TEZ BY ZADZIALALO I DALO REFERENCJE DO FIREBASE W TYM  MIEJSCU
        componentWillMount: function () {
            //url jest globalny
            var firebase = new Firebase(baseUrl + '/items/' + this.props.reactKey);
            this.bindAsObject(firebase, 'item');
            firebase.on('value', function (e) {
                !this.state && (this.setState({
                    task: e.val().task,
                    wasTextEdited: false
                }));
            }.bind(this));
        },
        render: function () {
            //console.log('elem ', this.props.item);
            //TASK JEST STATEM DLA DEMONSTRACJI i oddzielenia od bazy
            return (
                <li className="list-group-item">
                    <div className="input-group">
                    <span className="input-group-addon">
                        <input type="checkbox" onChange={this.onChecked}
                               checked={this.props.item.wasDone}/>
                    </span>
                        <input type="text" onChange={this.onInput}
                               disabled={this.props.item.wasDone}
                               className={'form-control '+(this.props.item.wasDone ? 'completed' : '')}
                               value={this.state.task}/>
                    <span className="input-group-btn">
                    <button onClick={this.confirmChange} type="button"
                            className={"btn btn-success "+(this.state.wasTextEdited ? "": "hidden") }>
                        Zapisz
                    </button>
                        <button onClick={this.cancelChange} type="button"
                                className={"btn btn-Warning "+(this.state.wasTextEdited ? "": "hidden") }>
                            Anuluj
                        </button>
                        {(function(){
                            if(!this.state.wasTextEdited){
                                return <button onClick={this.onDelete} type="button"
                                               className={"btn btn-danger "}>
                                    Usuń </button>
                                }}.bind(this))()}
                    </span>
                    </div>
                </li >
            )
        },
        onChecked: function (e) {
            this.props.checkedCallback(this.props.reactKey, e.target.checked);
        },
        onDelete: function () {
            this.props.onDelete(this.props.reactKey);
        },
        onInput: function (e) {
            this.setState({
                task: e.target.value,
                wasTextEdited: true
            });
        },
        cancelChange: function () {
            this.setState({
                task: this.state.item.task,
                wasTextEdited: false
            });
        },
        confirmChange: function () {
            this.firebaseRefs.item.update({
                task: this.state.task
            });
            this.setState({
                wasTextEdited: false
            });
        }
    })
    ;

module.exports = React.createClass({
    mixins: [ReactFire],
    getInitialState: function () {
        return {
            items: {}
        }
    },
    render: function () {

        var create = function (items) {
            if (items) {
                return Object.keys(items).map(function (elementName, i) {
                    //console.log(' processing ', elementName);
                    return <ListElement checkedCallback={this.props.onChecked}
                                        item={items[elementName]}
                                        reactKey={elementName}
                                        onDelete={this.props.deleteClick}
                                        key={elementName}/>
                }.bind(this))
            }
        }.bind(this);
        //console.log('list ', this.state);
        return <div className="">
            <ul className="list-group panel">
                {this.props.loaded ? create(this.props.items) : "loading..."}
            </ul>
        </div>
    },

});