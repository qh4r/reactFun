var React = require('react');

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
            <button className="dropdown-toggle" onClick={this.changeState}>Otworz/Zamknij</button>
            <ul className={"custom-dropdown "+ this.state.status}>
                <li>Polska</li>
                <li>Rosja</li>
                <li>Czechosłowacja</li>
                <li>Jugosławia</li>
            </ul>
        </div>
    }
});


module.exports = Dropdown;