var Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({
	defaults: {
		title: '',
		url: '',
		albumNumber: null,
		createdAt: null,
		id: null
	},
	urlRoot:"http://tiny-pizza-server.herokuapp.com/collections/robalbum",
	idAttribute: "_id"
	//  validate: function(attr) {
	// 	if(!attr.title) {
	// 		return 'Enter a post title.'
	// 	} else if(attr.category == '') {
	// 		return 'Enter a post category'
	// 	} else if(!attr.body) {
	// 		return 'Enter a post body.'
	// 	}
	// 	return false;
	// }
});