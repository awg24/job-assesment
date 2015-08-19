var React = require('react');
var Backbone = require("backbone");

var Login = require("./components/Login");
var BlogList = require("./components/BlogList");
var NewPost = require("./components/NewPost");
var User = require("./models/UserModel");
var containerEl = document.getElementById("container");

var user = new User();

var Blog = Backbone.Router.extend({
	routes: {
		"": "login",
		"blogs/page/:num": "blogs",
		"post": "post"
	},
	login: function(){
		React.render(<Login myRoutes={this} loggingIn={user}/>,containerEl);
	},
	blogs: function(num){
		React.render(<BlogList myRoutes={this} loggedIn={user} page={num}/>, containerEl);
	},
	post: function(){
		React.render(<NewPost myRoutes={this} loggedIn={user} />, containerEl);
	}
});

var myRoutes = new Blog();
Backbone.history.start();