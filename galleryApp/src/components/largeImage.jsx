var React = require('react'),
    Reflux = require('reflux'),
    ImageStore = require('../stores/imagesStore'),
    CommentsStore = require('../stores/commentsStore');
Actions = require('../actions');

module.exports = React.createClass({
    mixins: [Reflux.listenTo(ImageStore, 'onImage'),
        Reflux.listenTo(CommentsStore, 'onImage')],
    getInitialState: function () {
        return {}
    },
    componentWillMount: function () {
        Actions.findImage(this.props.params.id);
    },
    render: function () {
        return <div>
            {this.state.image ? this.renderImage() : null}
            <h4>Comments:</h4>
            {this.renderComments(this.state.comments, 0)}
        </div>
    },
    renderImage: function () {
        return <div className="panel panel-default">
            <div className="panel-heading header-center">
                <h4>{this.state.image.title}</h4>
            </div>
            <div className="panel-body">
                {(function(){
                    if(this.state.image.animated){
                        return <video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline
                                      className="center-media">
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
    renderComments: function (comments, depth) {
        return comments ? <ul className={"list-group margin-"+depth}>
            {this.renderCommentsList(comments, depth)} </ul> : null
    },
    renderCommentsList: function(comments, depth){
        console.log()
        return comments.slice(0,10).map(function (comment) {
            return <li className="list-group-item" key={comment.id}>
                <h6><strong>{comment.author}</strong>
                    <small>{'\t'+new Date(comment.datetime*1000).toString()} </small>
                </h6>
                <p>{comment.comment}</p>
                {(function(comment, depth){
                    if (comment.children && comment.children.length) {
                        return this.renderComments(comment.children, ++depth);
                        }
                    }.bind(this))(comment, depth)}
            </li>
        }.bind(this))
    },
    onImage: function (event, image) {
        console.log(event, image, CommentsStore.comments);
        this.setState({
            image: ImageStore.image,
            comments: CommentsStore.comments
        });
    }
});