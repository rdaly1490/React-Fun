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
        console.log(this.props.id);
        // var URL = window.location.hash.split("/");
        // console.log(URL);
        // var currentHash=newURL[1];
        // console.log(currentHash);

        // var ZoomContents = this.state.ZoomArray.map(function(testModel){

        //     if(testModel.albumNumber === currentHash) {

        //     return (
        //             <div className="inside-album" key={testModel._id}>
        //                 <h5>{testModel.title}</h5>
        //                 <img data-id={testModel._id} src={testModel.url} />
        //             </div>
        //         );
        //     }
            
        // });
        return (
            <div>
                <h1>Zoom Page!</h1>
            </div>        
        );
    }

 });