var React = require('react');
var ReactDOM = require('react-dom');
var Hello = function (props) {
    return (
        <li>
            Witaj {props.name}!
        </li>
    )
};

var HelloList = function (props) {
    return (
        <ul>
            {props.list.map(function (item) {
                return <Hello name={item}/>;
            })}
        </ul>
    )
};

var namesList = ['Rafał', 'Mariusz', 'Szymon', 'Janina']

ReactDOM.render(<HelloList list={namesList}/>, document.getElementById('app'));
//ReactDOM.render(<Hello name="Rafał" />, document.getElementById('app'));
