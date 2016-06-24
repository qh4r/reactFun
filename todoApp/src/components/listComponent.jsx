var React = require('react');
var ReactFire = require('reactfire');
//var plyfil = require('../libs/objectKeyPolyfil.js');

var ListElement = React.createClass({
    render: function () {
        //console.log('elem ', this.props.item);
        return (
            <li className="list-group-item">
                <div className="checkbox">
                    <label><input type="checkbox" onChange={this.onChecked} checked={this.props.item.wasDone}/>
                        <p className={this.props.item.wasDone ? 'completed' : ''}>{this.props.item.task}</p>
                    </label>
                    <button onClick={this.onDelete} type="button" className="btn btn-danger pull-right">
                        Usuń
                    </button>
                </div>
            </li>
        )
    },
    onChecked: function (e) {
        console.log(this.props);
        this.props.checkedCallback(this.props.reactKey, e.target.checked);
    },
    onDelete: function() {
        this.props.onDelete(this.props.reactKey);
    }
});

module.exports = React.createClass({
    mixins: [ReactFire],
    getInitialState: function () {
        return {
            items: {}
        }
    },
    //componentWillMount: function () {
    //    this.bindAsObject(this.props.storage, 'items')
    //},
    render: function () {

        var create = function (items) {
            return Object.keys(items).map(function (elementName, i) {
                //console.log(' processing ', elementName);
                return <ListElement checkedCallback={this.props.onChecked}
                                    item={items[elementName]}
                                    reactKey={elementName}
                                    onDelete={this.props.deleteClick}
                                    key={elementName}/>
            }.bind(this))
        }.bind(this);
        //console.log('list ', this.state);
        return <div className="">
            <ul className="list-group panel">
                {this.props.loaded ? create(this.props.items) : "loading..."}
            </ul>
        </div>
    },

});