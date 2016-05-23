var React = require('react');
var Question = require('../components/Question');

var QuestionContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
      return {
          name: ''
      }
    },
    handleUpdate: function(e){
        //console.log(e.target)
        this.setState({
            name: e.target.value
        });
    },
    handleSubmit: function(e){
        e.preventDefault();
        var prevName = this.state.name;
        this.setState({
            name: ''
        });
        if(this.props.routeParams.firstPlayer){
            this.context.router.push({
                pathname: '/fight',
                query: {
                    firstPlayer: this.props.routeParams.firstPlayer,
                    secondPlayer: this.state.name
                }
            })
        } else {
            this.context.router.push('/secondPlayer/'+prevName )
        }
    },
    render: function(){
        return (
            <Question
                onSubmit={this.handleSubmit}
                onUpdate={this.handleUpdate}
                name={this.state.name}
                header={this.props.route.header}/>
        )
    }
});

module.exports = QuestionContainer;