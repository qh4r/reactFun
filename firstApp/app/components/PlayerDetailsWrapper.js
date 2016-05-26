var React = require('react');

var PlayerDetailsWrapper = function (props) {
    return (
        <div className="col-sm-6">
            <p className="lead">{props.displayName}</p>
            {props.children}
        </div>
    )
};

PlayerDetailsWrapper.propTypes = {
    displayName: React.PropTypes.string.isRequired,
};

module.exports = PlayerDetailsWrapper;