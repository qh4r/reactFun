var React = require('react');
var ReactDOM = require('react-dom');
var SOME_DATA = {
    name: 'Rafał',
    surname: 'Kucharski',
    image: 'https://media.giphy.com/media/WZmgVLMt7mp44/giphy.gif'
}
var Picture = React.createClass({
    render: function () {
        return (<img src={this.props.url}
                     style={{height: 150, width:150}}/> )
    }
});

var CustomLink = React.createClass({
    changeUrl: function () {
        window.location.replace(this.props.href);
    },
    render: function () {
        return (
            <span style={{color: 'blue', cursor: 'pointer'}}
                  onClick={this.changeUrl}>
               {this.props.children}
           </span>
        )
    }
});

var Link = React.createClass({
    render: function () {
        return (
            <div>
                <CustomLink href={'https://www.google.pl/#q=' + this.props.username}>
                    {'>> klik <<'}
                </CustomLink>
            </div>
        )
    }
});

var Name = React.createClass({
    render: function () {
        return (<div>
            {this.props.name}
        </div>)
    }
});

var Container = React.createClass({
    render: function () {
        return (<div>
            <Picture url={this.props.user.image}/>
            <Name name={this.props.user.name + ' ' + this.props.user.surname}/>
            <Link username={this.props.user.name + ' ' + this.props.user.surname}/>
        </div>)
    }
});

ReactDOM.render(<Container user={SOME_DATA}/>, document.getElementById('app'))