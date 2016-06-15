var React = require('react');
var Thumbnail = require('./Thumbnail');

var ThumbnailsList = React.createClass({
    render: function () {
        return <div className="row">
            {this.props.input.map(function(element){
                return <Thumbnail data={element}/>
            })}
        </div>
    }
});

module.exports = ThumbnailsList;