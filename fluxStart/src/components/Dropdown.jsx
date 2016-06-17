var React = require('react'),
    DropdownToggle = require('./DropdownToggle'),
    DropdownList = require('./DropdownList');


var Dropdown = React.createClass({
    getInitialState: function () {
        return {
            status: 'closed',
            selected: (function(selected){
                this.props.dataList.forEach(function(elem){
                    selected = (elem.isSelected = !!elem.isSelected) ? elem : undefined;
                });
                return selected || this.props.dataList && this.props.dataList.length ?
                    (this.props.dataList[0].isSelected = true) && this.props.dataList[0]
                    : {name:'NULL'};
            }.bind(this))({})
        }
    },
    changeState: function () {
        this.setState({
            status: this.state.status === 'closed' ? 'open' : 'closed'
        })
    },
    updateSelection: function(newSelected){
        this.props.dataList.forEach(function(elem){
             (elem.isSelected = elem.name === newSelected) && this.setState({
                 selected: elem
             })
        }.bind(this));
        this.setState({
            status : 'closed'
        })
    },
    render: function () {
        return <div className="dropdown">
            <DropdownToggle onChangeState={this.changeState}>{this.state.selected.name}</DropdownToggle>
            <DropdownList onSelected={this.updateSelection} status={this.state.status} data={this.props.dataList} />
        </div>
    }
});


module.exports = Dropdown;