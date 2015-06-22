var React = require('react');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var ImageModel = require('../models/ImageModel');

var AlbumListComponent = require('./AlbumListComponent');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <form onSubmit={this.submitImg}>
                <input type='text' ref='title' placeholder='Title goes here' /><br/>
                    <input type='text' ref='url' placeholder='URL goes here' /><br/>
                    <input type='text' ref='albumNumber' placeholder='Album Number' /><br/>
                    <button type='submit'>Post you blog</button>
                </form>
            </div>        
        );
    }

 });