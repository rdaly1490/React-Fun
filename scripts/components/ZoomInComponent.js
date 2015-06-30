var React = require('react');
var Backbone = require('backbone');
var $ = require("jquery");
Backbone.$ = require('jquery');
var ImageModel = require('../models/ImageModel');

var AlbumListComponent = require('./AlbumListComponent');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            ZoomArray: []
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

            var currentId = this.props.id;

            var zoomedContents = this.state.ZoomArray.map(function(zoomModel){

            if(zoomModel._id === currentId) {

            return (
                    <div className="inside-album" key={zoomModel._id}>
                        <h5>{zoomModel.title}</h5>
                        <img data-id={zoomModel._id} src={zoomModel.url} />
                    </div>
                );
            }
            
        });
        return (
            <div>
                <h5>Zoom Page!</h5>
                {zoomedContents}
            </div>        
        );
    }

 });