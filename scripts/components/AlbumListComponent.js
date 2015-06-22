var React = require('react');
var Backbone = require('backbone');
var $ = require("jquery");
Backbone.$ = require('jquery');
var _ = require("underscore")
var ImageModel = require('../models/ImageModel');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            AlbumThumbnailArray: []
        }
    },
    componentWillMount: function() {
        $.get (
            "http://tiny-pizza-server.herokuapp.com/collections/robalbum",
            function(imgList) {
                if(this.isMounted()) {
                    this.setState({
                        AlbumThumbnailArray: (imgList)
                    });
                }
            }.bind(this)
        );
    },
    render: function() {
        var one = _.find(this.state.AlbumThumbnailArray, function(model) {
            if(parseInt(model.albumNumber) === 1){
                return (
                    model
                    );
            }
        });
        var two = _.find(this.state.AlbumThumbnailArray, function(model) {
            if(parseInt(model.albumNumber) === 2){
                return (
                    model
                    );
            }
        });
        var three = _.find(this.state.AlbumThumbnailArray, function(model) {
            if(parseInt(model.albumNumber) === 3){
                return (
                    model
                    );
            }
        });
        var four = _.find(this.state.AlbumThumbnailArray, function(model) {
            if(parseInt(model.albumNumber) === 4){
                return (
                    model
                    );
            }
        });
        var five = _.find(this.state.AlbumThumbnailArray, function(model) {
            if(parseInt(model.albumNumber) === 5){
                return (
                    model
                    );
            }
        });
        var six = _.find(this.state.AlbumThumbnailArray, function(model) {
            if(parseInt(model.albumNumber) === 6){
                return (
                    model
                    );
            }
        });
        // if(!test) {
        //     test = {}
        // }
        one = one || {}
        two = two || {}
        three = three || {}
        four = four || {}
        five = five || {}
        six = six || {}

        return (
            <div>
            <h3>Album 1</h3>
            <img data-id={1} onClick={this.goToAlbum} src={one.url} />
            <h3>Album 2</h3>
            <img data-id={2} onClick={this.goToAlbum} src={two.url} />
            <h3>Album 3</h3>
            <img data-id={3} onClick={this.goToAlbum} src={three.url} />
            <h3>Album 4</h3>
            <img data-id={4} onClick={this.goToAlbum} src={four.url} />
            <h3>Album 5</h3>
            <img data-id={5} onClick={this.goToAlbum} src={five.url} />
            <h3>Album 6</h3>
            <img data-id={6} onClick={this.goToAlbum} src={six.url} />
            </div>        
        );
    },
    goToAlbum: function(e) {
        e.preventDefault();
        var dataID = $(e.target).attr("data-id");
        this.props.myRouter.navigate("album/"+dataID, {trigger:true})
    }
});





// var albumCovers = {};
// _.each(this.state.AlbumThumbnailArray, function(model) {
//     if(!albumCovers.hasOwnProperty(model.albumNumber)) {
//         albumCovers[model.albumNumber] = model;
//     }
// });

// var albumArray = _.values(albumCovers);

// // {
// //     4: {...},
// //     1: {...},
// //     3: {...},
// //     6: {...},
// //     5: {...},
// //     2: {...}
// // }

// // ==>

// // [
// //     {...},
// //     {...},
// //     {...},
// //     {...},
// //     {...},
// //     {...}
// // ]

// _.sortBy(albumArray, 'albumNumber')

// var albums = []
// for(var i in albumCovers) {

// }








