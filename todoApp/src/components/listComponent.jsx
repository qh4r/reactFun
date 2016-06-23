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
                        {this.props.item.task}
                    </label>
                </div>
            </li>
        )
    },
    onChecked: function (e) {
        console.log(this.props);
        this.props.checkedCallback(this.props.reactKey, e.target.checked);
    }
});

module.exports = React.createClass({
    mixins: [ReactFire],
    getInitialState: function(){
        return {
            items: {
            }
        }
    },
    componentWillMount: function () {
        this.bindAsObject(this.props.storage, 'items')
    },
    render: function () {

        var create = function (items) {
                return Object.keys(items).map(function (elementName, i) {
                    //console.log(' processing ', elementName);
                    return <ListElement checkedCallback={this.onChecked}
                                        item={items[elementName]}
                                        reactKey={elementName}
                                        key={i}/>
                }.bind(this))
            }.bind(this);

        //console.log('list ', this.state);
        return <ul className="list-group">
            {create(this.state.items)}
        </ul>
    },
    onChecked: function (key, value) {
        this.props.storage.child(key).update({
            wasDone: value
        });
    }
});