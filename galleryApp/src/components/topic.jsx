var React = require('react');
var ImagesStore = require('../stores/imagesStore'),
    Actions = require('../actions'),
    Reflux = require('reflux');

module.exports = React.createClass({
    mixins: [Reflux.listenTo(ImagesStore, 'onImages')],
    getInitialState: function () {
        return {
            images: []
        }
    },
    componentWillMount: function(){
        Actions.getImages(this.props.params.id);
    },
    componentWillReceiveProps: function(old, news){
        Actions.getImages(this.props.params.id);
        //console.log(this.props.params.id, old, news)
    },
    render: function () {
        return (
            <div>
                TOPIC! {this.props.params.id}
                <ul>
                    {this.renderImages()}
                </ul>
            </div>
        )
    },
    renderImages:function(){
        return this.state.images.map(function(image, i){
            return (
                <li key={i}><img src={image.link}/></li>
            )
        })
    },
    onImages: function (event, data) {
        this.setState({
            images: data
        })
    }
});