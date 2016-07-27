var React = require('react');
//var ImagesStore = require('../stores/imagesStore'),
//    Actions = require('../actions'),
//    Reflux = require('reflux');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            isMouseOver: false
        }
    },
    render: function () {
        return (
            <div className="image-box"
                 onMouseEnter={this.onEnter}
                 onMouseLeave={this.onLeave} >
                {this.renderContent()}
                {this.renderIcon()}
            </div>
        )
    },
    createImageUrl: function () {
        return 'http://i.imgur.com/' + this.props.id + 'h.jpg';
    },
    renderContent: function(){
      if(this.props.animated && this.state.isMouseOver){
          return <video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
              <source src={this.props.mp4}/>
              </video>
      } else {
          return <img src={this.createImageUrl()}/>
      }
    },
    renderIcon: function(){
        if(this.props.animated && !this.state.isMouseOver){
            return <span className="glyphicon glyphicon-camera icon"/>
        }
    },
    onEnter: function(){
        this.setState({
            isMouseOver: true
        })
    },
    onLeave: function(){
        this.setState({
            isMouseOver: false
        })
    }
});
