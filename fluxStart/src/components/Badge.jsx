var Badge = React.createClass({
    render: function () {
        return (
            <button className="btn btn-primary" type="button">
                {this.props.text}: <span className="badge">{this.props.quantity}</span>
            </button>
        )
    }
});

module.exports = Badge;