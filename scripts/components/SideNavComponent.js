var React = require('react');
var Backbone = require('backbone');
var $ = require("jquery");
Backbone.$ = require('jquery');
var ImageModel = require('../models/ImageModel');

var AlbumListComponent = require('./AlbumListComponent');

module.exports = React.createClass({

    render: function() {

        return (
                <div className="col-xs-3 side-nav">
                    <ul>
                        <li><a href="#album/1">Album 1</a></li>
                        <li><a href="#album/2">Album 2</a></li>
                        <li><a href="#album/3">Album 3</a></li>
                        <li><a href="#album/4">Album 4</a></li>
                        <li><a href="#album/5">Album 5</a></li>
                        <li><a href="#album/6">Album 6</a></li>
                    </ul>
                </div>    
        );
    }
 });