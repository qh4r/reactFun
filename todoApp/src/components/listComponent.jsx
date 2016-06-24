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
                                    key={i}/>
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