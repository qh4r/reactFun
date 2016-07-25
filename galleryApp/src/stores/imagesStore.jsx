var Reflux = require('reflux'),
    Api = require('../helpers/api'),
    Actions = require('../actions');


module.exports = Reflux.createStore({
    listenables: [Actions],
    getImages: function(topicId){
        Api.get('topics/'+ topicId)
            .then(function(data){
                this.images = data.data;
                this.triggerChange()
            }.bind(this));
    },
    triggerChange: function(){
        this.trigger('images', this.images);
    }
});