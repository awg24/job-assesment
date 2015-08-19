var React = require("react");
var Pages = require("./Pagination");
var content = [{id:"a",title:"im title 1", content: "im content 1"},
				{id:"b",title:"im title 2", content: "im content 2"},
				{id:"c",title:"im title 3", content: "im content 3"},
				{id:"d",title:"im title 4", content: "im content 4"},
				{id:"e",title:"im title 5", content: "im content 5"},
				{id:"f",title:"im title 6", content: "im content 6"},
				{id:"g",title:"im title 7", content: "im content 7"},
				{id:"h",title:"im title 8", content: "im content 8"},
				{id:"i",title:"im title 9", content: "im content 9"},
				{id:"j",title:"im title 10", content: "im content 10"},
				{id:"k",title:"im title 11", content: "im content 11"},
				{id:"l",title:"im title 12", content: "im content 12"},
				{id:"m",title:"im title 1", content: "im content 1"},
				{id:"n",title:"im title 2", content: "im content 2"},
				{id:"o",title:"im title 3", content: "im content 3"},
				{id:"p",title:"im title 4", content: "im content 4"},
				{id:"q",title:"im title 5", content: "im content 5"},
				{id:"r",title:"im title 6", content: "im content 6"},
				{id:"s",title:"im title 7", content: "im content 7"},
				{id:"t",title:"im title 8", content: "im content 8"},
				{id:"u",title:"im title 9", content: "im content 9"},
				{id:"v",title:"im title 10", content: "im content 10"},
				{id:"w",title:"im title 11", content: "im content 11"},
				{id:"x",title:"im title 12", content: "im content 12"},
				{id:"y",title:"im title 10", content: "im content 10"},
				{id:"z",title:"im title 11", content: "im content 11"},
				{id:"aa",title:"im title 12", content: "im content 12"},
				{id:"ab",title:"im title 1", content: "im content 1"},
				{id:"ac",title:"im title 2", content: "im content 2"}];

module.exports = React.createClass({
	render: function(){
		var that = this;
		var pagedContent = pagination(content,this.props.page);
		var blogs = pagedContent.map(function(blog, index){
			return (
			<div key={blog.id} className="blog-card center-block">
				<a href="#post">View</a>
				<div className="text-center">
					<h3>{blog.title}</h3>
				</div>
				<div className="content-box padit">
					<p>{blog.content}</p>
				</div>
			</div>
			);
		});
		return (
		<div>
			<div className="text-center">
				<h1>Recent Posts!</h1>
				<button onClick={this.newPost} className="btn btn-primary">Submit a New Post!</button>
			</div>
			<br/>
			{blogs}
			<Pages page={this.props.page} myRoutes={this.props.myRoutes} content={content} />
		</div>
		);
	},
	newPost: function(){
		this.props.myRoutes.navigate("post", {trigger: true});
	}
});
function pagination(array, page){
	var sectionOf = [];
	var start = 0;
	var stop = 0;
	var index = 0;
	for(var i = 1; i < page; i++){
		start+=5;
	}
	stop = start + 4;
	if(stop > array.length-1){
	    stop = array.length-1;
	}
	for(var j = start; j <= stop; j++){
		sectionOf.push(array[j]);
	}
	return sectionOf;
}
