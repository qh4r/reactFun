var Reflux = require('reflux'),
    Api = require('../helpers/api'),
    Actions = require('../actions'),
    _ = require('lodash');


module.exports = Reflux.createStore({
    listenables: [Actions],
    getImages: function(topicId){
        Api.get('topics/'+ topicId)
            .then(function(data){
                this.images = _.filter(data.data, function(image){
                    return !image.is_album;
                });
                console.log(this.images);
                this.triggerChange()
            }.bind(this));
    },
    triggerChange: function(){
        this.trigger('images', this.images);
    }
});