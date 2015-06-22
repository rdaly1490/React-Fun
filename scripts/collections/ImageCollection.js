var Backbone = require('backbone');
Backbone.$ = require('jquery');
var ImageModel = require('../models/ImageModel');

module.exports = Backbone.Collection.extend({
	model: ImageModel,
	url:"http://tiny-pizza-server.herokuapp.com/collections/robalbum"
});