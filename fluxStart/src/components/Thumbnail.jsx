var Badge = require('./Badge');

var Thumbnail = React.createClass({
    render: function () {
        return (
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src={this.props.data.url} alt={this.props.data.label}/>
                    <div className="caption">
                        <h3>{this.props.data.label}</h3>
                        <Badge text={this.props.data.button.name} quantity={this.props.data.button.number}/>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Thumbnail;