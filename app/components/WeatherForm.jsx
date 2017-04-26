var React = require('react');

var WeatherForm = React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();

		var location = this.refs.search.value;
		if(location.length > 0){
			this.refs.search.value = '';
			this.props.onSearch(location);
		}

	},
	render: function(){
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" ref="search" placeholder="Fuck coding"/>
					<button className="button expanded hollow">Get Weather</button>
				</form>
			</div>
			);
	}
});

module.exports = WeatherForm;