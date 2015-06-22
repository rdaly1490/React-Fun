var React = require('react');
var Backbone = require('backbone');
Backbone.$ = require('jquery');

var HomePageComponent = require('./components/HomePageComponent');
var AlbumViewComponent = require('./components/AlbumViewComponent');
var AlbumListComponent = require('./components/AlbumListComponent');

var ImageCollection = require('./collections/ImageCollection');

// var ImgList = new ImageCollection()

var App = Backbone.Router.extend({
    routes: {
        '': 'home',
        "home": "home",
        "album/:number":"album"
    },
    home: function() {
        React.render(
        <div>
            <HomePageComponent />
            <AlbumListComponent myRouter={myRouter} />
        </div>,
        document.querySelector('#container'));
    },
    album: function(number) {
    	React.render(
        <AlbumViewComponent />,
        document.querySelector('#container'));
    }
});

var myRouter = new App();
Backbone.history.start();

// function newPost(postModel) {
// 	console.log('newPost was run');
// 	ImgList.add(postModel);
// }