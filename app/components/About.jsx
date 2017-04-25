var React = require('react');

//var About = React.createClass({
//	render: function(){
//		return(
//			<h3>About Component</h3>
//			);
//	}
//});
var About = (props) => {
	return (
		<div>
			<span className="label info"><i className="fi-widget"></i> About Me</span>
		</div>
		);
}
			

module.exports = About;