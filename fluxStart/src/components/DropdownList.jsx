var React = require('react');

var ListItem = function (props) {
    return (
        <li>{props.text}</li>
    )
};
//BEZ UNIQUE KEY DLA KAZDEGO ELEMENTU GENEROWANEGO W .MAP WYWALA SIE PO MINIFIKACJI
module.exports = function (props) {
    return (
        <ul className={"custom-dropdown "+ props.status}>
            {props.data.map(function(element, i){
                return <ListItem key={i} text={element.name}/>
                })}
        </ul>
    );
};