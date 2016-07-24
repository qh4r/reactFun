var React = require('react');
var Router = require('react-router'),
    Link = Router.Link;

var Api = require('../helpers/api.jsx');

//<Link to""> działa jak <a href="">

module.exports = React.createClass({
    componentDidMount: function(){
        Api.get('topics/defaults').then(function(x){
            console.log(x);
        });
    },
    render: function () {
        return(
        <div>
            <nav className="navbar navbar-default header">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        Galeria
                    </Link>
                    <Link to="/1337" className="navbar-brand">
                        Co inne
                    </Link>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a>Kategoria Pierwsza</a></li>
                    </ul>
                </div>
            </nav>
            <div className="container-fluid">
                {this.props.children}
            </div>
        </div>
        )
    }
});