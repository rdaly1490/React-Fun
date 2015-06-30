var React = require('react');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var ImageModel = require('../models/ImageModel');

var AlbumListComponent = require('./AlbumListComponent');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="col-xs-3 submit-img">
                <form onSubmit={this.submitImg}>
                    <label>Title</label><br />
                    <input type='text' ref='title' /><br/>
                    <label>URL</label><br />
                    <input type='text' ref='url' /><br/>
                    <label>Select Album Number</label><br />
                    <select ref="albumNumber">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select><br />
                    <button type='submit'>Post you blog</button>
                </form>
            </div>        
        );
    },
    submitImg: function(e) {
        e.preventDefault();
        var newPic = new ImageModel({
            title: this.refs.title.getDOMNode().value,
            url: this.refs.url.getDOMNode().value,
            albumNumber: this.refs.albumNumber.getDOMNode().value
        });
        console.log(newPic);
        newPic.save();
        this.forceUpdate();
    }

 });
