var React = require('react'),
    Reflux = require('reflux'),
    ImageStore = require('../stores/imagesStore'),
    Actions = require('../actions');

module.exports = React.createClass({
    mixins: [Reflux.listenTo(ImageStore, 'onImage')],
    getInitialState: function(){
      return {

      }
    },
    componentWillMount: function(){
        Actions.findImage(this.props.params.id);
    },
    render: function(){
        return <div>
            {this.state.image ? this.renderImage() : null}
        </div>
    },
    renderImage: function(){
        return <div className="panel panel-default">
                <div className="panel-heading">
                    <h4>{this.state.image.title}</h4>
                </div>
                <div className="panel-body">
                    {(function(){
                        if(this.state.image.animated){
                            return <video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline className="center-media">
                                <source src={this.state.image.mp4}/>
                            </video>
                        } else {
                            return <img src={this.state.image.link} className="center-media"/>
                        }
                        }.bind(this))()}
                </div>
            <div className="panel-footer">
                <h5>{this.state.image.description}</h5>
            </div>
            </div>
    },
    onImage: function(event, image){
        console.log(event, image);
        this.setState({
            image: image
        });
    }
});