var Api = require('../helpers/api'),
    Reflux = require('reflux'),
    Actions = require('../actions');

module.exports = Reflux.createStore({
    //w ten sposob listenables -> Actions bedzie wywolywalo metody zawarte jako stringi w tabeli Actions
    // czyli w tym wypadku getTopics
    //inny istniejacy action jesli nie ma odpowiedniej metody, nie powoduje bledu
    listenables: [Actions],
    getTopics: function () {
        return Api.get('topics/defaults')
            .then(function (json) {
                this.topics = json.data;
                this.triggerChange();
            }.bind(this));
    },
    triggerChange: function () {
        //dupa jest jako przyklad lepsze bylo by change
        //generalnie liczy sie tylko to by nazwa podana w triggerze była zgodna z tym co jest w listenerze
        // tak naprawde to po prostu 1 store -> 1 callback widac to na przykladzie headerow
        this.trigger('dupa',this.topics);
    },
    //testTest: function(){
    //    console.log('test was called');
    //}
});