var Backbone = require("backbone");
var BlogModel = require("../models/BlogModel");

module.exports = Backbone.Collection.extend({
	model: BlogModel
});