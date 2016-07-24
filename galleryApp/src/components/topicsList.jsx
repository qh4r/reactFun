var React = require('react'),
    Api = require('../helpers/api.jsx');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            topics: []
        }
    },
    componentWillMount: function () {
      Api.get('topics/defaults').then(function(result){
          console.log(result);
          this.setState({
              topics: result.data || []
          })
      }.bind(this))
    },
    render: function () {
        return (
            <div className="list-group">
               <ul>
                   {this.renderTopics()}
               </ul>
            </div>
        )
    },
    renderTopics: function () {
        return this.state.topics && this.state.topics.length && this.state.topics.map(function (topic) {
            return (<li key={topic.id}>
                {topic.name}
            </li>)
        })
    }
});