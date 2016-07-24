var React = require('react'),
    TopicsStore = require('../stores/topicsStore'),
    Reflux = require('reflux'),
    Actions = require('../actions');

module.exports = React.createClass({
    //dupa jest jako przyklad lepsze bylo by change
    //generalnie liczy sie tylko to by nazwa podana w triggerze była zgodna z tym co jest w listenerze
    // w formacie nazwa -> onNazwa
    mixins: [
      Reflux.listenTo(TopicsStore, 'onDupa')
    ],
    getInitialState: function () {
        return {
            topics: []
        }
    },
    componentWillMount: function () {
        Actions.getTopics();
        // jesli nigdzie nie istnieje implementacja metody dla testTest to nie spowoduje to bledu
        // dla przykladu implementacja w topicStore zostala zakomentowana 
        Actions.testTest();

      //TopicsStore.getTopics();
        //.then(function(){
        //    this.setState({
        //        topics: TopicsStore.topics || []
        //    });
        //}.bind(this))
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
    },
    onDupa: function(event,topics){
        //console.log('change: ',event, topics);
        this.setState({
            topics: topics
        });
    }
});