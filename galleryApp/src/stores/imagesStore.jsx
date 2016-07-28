var Reflux = require('reflux'),
    Api = require('../helpers/api'),
    Actions = require('../actions'),
    _ = require('lodash');


module.exports = Reflux.createStore({
    listenables: [Actions],
    getImages: function (topicId) {
        Api.get('topics/' + topicId)
            .then(function (data) {
                this.images = _.filter(data.data, function (image) {
                    return !image.is_album;
                });
                //console.log(this.images);
                this.triggerChange()
            }.bind(this));
    },
    //alternatywne rozwiazanie to wywolywanie find po stronie komponentu
    // w momencie wywolania zmiany na tablicy i tak w kolko az sie powiedzie
    findImage: function (id) {
        var image = this.images && _.find(this.images, function (img) {
                return img.id == id;
            });
        if (image) {
            this.image = image;
            this.triggerSingle();
        } else {
            this.getImage(id);
        }
    },
    getImage: function (id) {
        Api.get('gallery/image/' + id)
            .then(function (data) {
                this.image = data.data;
                this.triggerSingle();
            }.bind(this))
    },
    triggerChange: function () {
        this.trigger('images', this.images);
    },
    triggerSingle: function () {
        this.trigger('image', this.image);
    }
});