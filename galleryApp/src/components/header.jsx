var React = require('react');
var Router = require('react-router'),
    Link = Router.Link;


//<Link to""> działa jak <a href="">

module.exports = React.createClass({
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