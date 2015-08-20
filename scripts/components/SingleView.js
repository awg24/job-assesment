var React = require("react");

module.exports = React.createClass({
	render: function(){
		return (
		<div className="blog-card center-block shift-down small-width overflow">
			<div className="text-center">
				<h3>{this.props.blog.get("title")}</h3>
			</div>
			<p>{this.props.blog.get("feelings")}</p>
			<button onClick={this.props.closeModal} className="btn btn-danger pull-left">Close</button>
		</div>
		);
	}
});