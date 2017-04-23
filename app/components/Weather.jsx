var React = require('react');
//var WeatherState = require('WeatherState');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState() {
		return {
			isLoading: false
		}	
	},
	handleSearch: function(location){
		var that = this;

		debugger;

		this.setState({isLoading: true});
		openWeatherMap.getTemp(location).then((temp) => {
			this.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, (errorMessage) => {
			this.setState({isLoading: false});
			alert(errorMessage);
		});
	},
	render: function(){
		var {temp, location, isLoading} = this.state;

		function renderMessage(){
			if(isLoading){
				return <h3>Fetching Weather...</h3>
			} else if(temp && location){
				
				return (<WeatherMessage temp={temp} location={location}/>);
			}
		}
		return(
			<div>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
			);
	}
});

module.exports = Weather;