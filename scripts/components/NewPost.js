var React = require("react");
var BlogModel = require("../models/BlogModel");
var blogID = 0;
module.exports = React.createClass({
	getInitialState: function(){
		return {
			errors: {}
		};
	},
	render: function(){
		return (
		<div className="blog-card center-block shift-down small-width overflow">
			<input className="style-input" ref="title" type="text" placeholder="Title"/>
			<label className="error">{this.state.errors.title}</label>
			<br/>
			<textarea className="style-input" ref="feelings" placeholder="Tell me your feelings... "></textarea>
			<label className="error">{this.state.errors.feelings}</label>
			<div className="text-center"><label className="success">{this.state.errors.success}</label></div>
			<button onClick={this.props.closeModal} className="btn btn-danger pull-left">Close</button>
			<button onClick={this.submitPost} className="btn btn-primary pull-right">Post!</button>
		</div>
		);
	},
	submitPost: function(){
		var blog = new BlogModel({
			id: blogID,
			title: this.refs.title.getDOMNode().value,
			feelings: this.refs.feelings.getDOMNode().value,
			createdAt: new Date()
		});

		if(!blog.isValid()){
			this.setState({errors: blog.validationError})
		} else {
			var that = this;
			blogID++;
			this.props.blogCollection.add(blog);
			window.setTimeout(function(){
				that.props.closeModal();
			}, 1500);
			this.setState({errors:{success:"Post submitted!"}});
		}
	}
});