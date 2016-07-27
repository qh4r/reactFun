var React = require('react');
var ImagesStore = require('../stores/imagesStore'),
    Actions = require('../actions'),
    Reflux = require('reflux'),
    ImageBox = require('./imageBox');

module.exports = React.createClass({
    mixins: [Reflux.listenTo(ImagesStore, 'onImages')],
    getInitialState: function () {
        return {
            images: []
        }
    },
    componentWillMount: function () {
        Actions.getImages(this.props.params.id);
    },
    componentWillReceiveProps: function (newProps) {
        Actions.getImages(newProps.params.id);
        console.log(newProps.params.id, newProps)
    },
    render: function () {
        return (
        <div className="topic">
                {this.renderImages()}
            </div>
        )
    },
    renderImages: function () {
        return this.state.images.slice(0, 24).map(function (image) {
            return (
                <ImageBox key={image.id} {...image} /> //{...image} jest równoznaczene z przypisaniem wszystkich kluczy z obiektu do props
            )
        })
    },
    onImages: function (event, data) {
        this.setState({
            images: data
        })
    }
});