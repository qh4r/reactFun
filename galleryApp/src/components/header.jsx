var React = require('react');
var Router = require('react-router'),
    Link = Router.Link,
    Actions = require('../actions'),
    TopicsStore = require('../stores/topicsStore'),
    Reflux = require('reflux');

//<Link to""> działa jak <a href="">

//activeClassName aktywuje sie gdy dany route (wskazywany rpzez link) jest aktywny
Topic = function(props){
    return (
        <li>
            <Link activeClassName="active" to={'topics/'+props.id}>{props.name}</Link>
        </li>
    )
};

module.exports = React.createClass({
    //componentDidMount: function(){
    //
    //},
    mixins: [
        Reflux.listenTo(TopicsStore, 'kolbakTematow')
    ],
    getInitialState: function(){
        return {
            topics: []
        }
    },
    componentWillMount: function(){
        Actions.getTopics();
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
                        <li><a>Tematow: {this.state.topics.length}</a></li>
                        {this.topicsDropdown()}
                    </ul>
                </div>
            </nav>
            <div className="container-fluid">
                {this.props.children}
            </div>
        </div>
        )
    },
    topicsDropdown: function(){
        return this.state.topics.slice(0,3).map(function(topic){
            return <Topic key={topic.id} name={topic.name} id={topic.id}/>
        })
    },
    kolbakTematow: function(event, data){
        this.setState({
            topics: data
        });
    }
});