var React = require('react');
var Backbone = require('backbone');
var $ = require("jquery");
Backbone.$ = require('jquery');
var ImageModel = require('../models/ImageModel');

var AlbumListComponent = require('./AlbumListComponent');

module.exports = React.createClass({
    getInitialState: function() {
        var that = this;
        var post = new ImageModel({
            _id: this.props.id 
        });
        post.fetch();
        console.log(post);

        post.on("change", function() {
            that.forceUpdate();
        });
        return {
            ZoomArray: [],
            post: post
        }
    },
    componentWillMount: function() {
        $.get (
            "http://tiny-pizza-server.herokuapp.com/collections/robalbum",
            function(imgList) {
                if(this.isMounted()) {
                    this.setState({
                        ZoomArray: (imgList)
                    });
                }
            }.bind(this)
        );
    },
    render: function() {
            var style = {
                height:"500px",
                width:"500px"
            };

            var currentId = this.props.id;

            var zoomedContents = this.state.ZoomArray.map(function(zoomModel){

            if(zoomModel._id === currentId) {

            return (
                    <div className="inside-album" key={zoomModel._id}>
                        <h5>Title: {zoomModel.title}</h5>
                        <img style={style} data-id={zoomModel._id} src={zoomModel.url} />
                    </div>
                );
            }
            
        });
        return (
            <div className="col-xs-8 zoom">
                <h3> Click Image to Return to album!</h3>
                <div onClick={this.zoomOut}>
                    {zoomedContents}
                </div>
            </div>        
        );
    },
    zoomOut: function(e) {
        e.preventDefault();
        console.log(this.state.post.get("albumNumber"));
        console.log("works");
        this.props.myRouter.navigate("album/"+this.state.post.get("albumNumber"), {trigger: true});
    }

 });