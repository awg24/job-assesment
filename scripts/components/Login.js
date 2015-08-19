var React = require("react");
var User = require("../models/UserModel");
var $ = require("jquery");
var userCount = 0;
var Cookies = require("js-cookie");
module.exports = React.createClass({
	getInitialState: function(){
		return {
			errors: {}
		}
	},
	render: function(){
		return (
		<div className="panel panel-primary shape">
			<div className="panel-heading">
				<h3 className="panel-title">Login</h3>
			</div>
			<form onSubmit={this.loginUser} className="form-horizontal text-center">
				<div className="panel-body">
					<div>
						Username: <input ref="username" type="text"/>
					</div>
					<label className="error">{this.state.errors.username}</label>
					<br/>
					<div>
						Password: <input className="small-margin" ref="password" type="password"/>
					</div>
					<label className="error">{this.state.errors.password}</label>
				</div>
				<div className="center-block small-block">
					admin:  <input name="user-type" value="admin" type="radio"/>
					<div className="in-line"> </div>
					reader: <input name="user-type" value="reader" type="radio"/>
				</div>
				<label className="error">{this.state.errors.userType}</label>
				<input type="submit" className="btn btn-primary btn-md center-block add-bottom-margin"Login />
			</form>
		</div>
		);
	},
	loginUser: function(event){
		event.preventDefault();
		var user = this.props.loggingIn;

		user.set("id",userCount);
		user.set("username", this.refs.username.getDOMNode().value);
		user.set("password", this.refs.password.getDOMNode().value);
		user.set("userType", $("input[name='user-type']:checked").val());

		if(!user.isValid()){
			this.setState({errors: user.validationError})
		} else {
			userCount++;
			Cookies.set(user.get("username"), user.id);
			this.props.myRoutes.navigate("blogs/page/"+1, {trigger: true});
		}
	}
});