var React = require('react'),
    DropdownToggle = require('./DropdownToggle'),
    DropdownList = require('./DropdownList');


var Dropdown = React.createClass({
    getInitialState: function () {
        return {
            status: 'closed'
        }
    },
    changeState: function () {
        this.setState({
            status: this.state.status === 'closed' ? 'open' : 'closed'
        })
    },
    render: function () {
        return <div className="dropdown">
            <DropdownToggle onChangeState={this.changeState}>Otworz/Zamknij</DropdownToggle>
            <DropdownList status={this.state.status} data={this.props.dataList} />
        </div>
    }
});


module.exports = Dropdown;