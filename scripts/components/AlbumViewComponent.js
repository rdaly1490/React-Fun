var React = require('react');
var Backbone = require('backbone');
var $ = require("jquery");
Backbone.$ = require('jquery');
var ImageModel = require('../models/ImageModel');

var AlbumListComponent = require('./AlbumListComponent');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            AlbumArray: []
        }
    },
    componentWillMount: function() {
        $.get (
            "http://tiny-pizza-server.herokuapp.com/collections/robalbum",
            function(imgList) {
                if(this.isMounted()) {
                    this.setState({
                        AlbumArray: (imgList)
                    });
                }
            }.bind(this)
        );
    },
    render: function() {
        var currentAlbum = this.props.number;

        var albumContents = this.state.AlbumArray.map(function(testModel){

            if(testModel.albumNumber === currentAlbum) {
                // console.log(testModel._id);

            return (
                    <div className="inside-album" key={testModel._id}>
                        <h5>{testModel.title}</h5>
                        <img data-id={testModel._id} src={testModel.url} />
                    </div>
                );
            }
            
        });
        return (
            <div>
                <h1>Album Page!</h1>
                <button onClick={this.goBack}>Go Back</button>
                <div onClick={this.zoomIn}>
                    {albumContents}
                </div>
            </div>        
        );
    },
    goBack: function(e) {
        e.preventDefault();
        this.props.myRouter.navigate("home",{trigger:true});
    },
    zoomIn: function(e) {
        e.preventDefault();
        var imgID = $(e.target).attr("data-id");
        this.props.myRouter.navigate("zoom/"+imgID, {trigger:true});  
    }

 });











