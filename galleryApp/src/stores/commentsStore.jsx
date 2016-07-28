var Reflux = require('reflux'),
    Api = require('../helpers/api'),
    Actions = require('../actions');

module.exports = Reflux.createStore({
    listenables: [Actions],
    findImage: function (id) {
        console.log('get comment')
        Api.get('/gallery/' + id + '/comments')
            .then(function (json) {
                this.comments = json.data;
                this.triggerChange();
            }.bind(this));
    },
    triggerChange: function(){
      this.trigger('image', this.comments);
    }
});