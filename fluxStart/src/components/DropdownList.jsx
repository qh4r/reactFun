var React = require('react');

var ListItem = React.createClass({
    render: function () {
        return (
            <li className={this.props.isSelected && "selected"} onClick={function(){this.props.onSelected.call(this, this.props.text)}.bind(this)}>{this.props.text}</li>
        )
    }
});

//BEZ UNIQUE KEY DLA KAZDEGO ELEMENTU GENEROWANEGO W .MAP WYWALA SIE PO MINIFIKACJI
module.exports = function (props) {
    return (
        <ul className={"custom-dropdown "+ props.status}>
            {props.data.map(function(element, i){
                return <ListItem key={i} onSelected={props.onSelected} isSelected={element.isSelected} text={element.name}/>
                })}
        </ul>
    );
};