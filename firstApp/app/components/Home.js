var React = require('react');
require('../styles/bootstrap.css');
require('../styles/index.css');
var ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron col-sm-12 text-center transparentBg">
                <h1>Bitwa</h1>
                <p className="lead">Witamy Serdecznie!</p>
                <Link to="/firstPlayer">
                    <button type="button" className="btn btn-lg btn-success">
                        Rozpocznij!
                    </button>
                </Link>
            </div>
        )
    }
});

module.exports = Home;