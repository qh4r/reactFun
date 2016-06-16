var React = require('react');
var Thumbnail = require('./Thumbnail');

//BEZ UNIQUE KEY DLA KAZDEGO ELEMENTU GENEROWANEGO W .MAP WYWALA SIE PO MINIFIKACJI!
var ThumbnailsList = React.createClass({
    render: function () {
        return <div className="row">
            {this.props.input.map(function(element, i){
                return <Thumbnail key={i} data={element}/>
            })}
        </div>
    }
});

module.exports = ThumbnailsList;