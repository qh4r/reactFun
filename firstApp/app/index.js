var React = require('react');
var ReactDOM = require('react-dom');
var Hello = React.createClass({
    render: function(){
        return (
            <li>
                Witaj {this.props.name}!
            </li>
        )
    }
});

var HelloList = React.createClass({
        render: function () {
            var list = ['Rafał', 'Mariusz', 'Szymon']
            var renderList = list.map(function (item) {
                return <li>{item}</li>;
            });
            return (
                <ul>
                    {renderList}
                </ul>
            )
        }
    }
);

ReactDOM.render(<HelloList />, document.getElementById('app'));
//ReactDOM.render(<Hello name="Rafał" />, document.getElementById('app'));
