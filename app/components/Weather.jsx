var React = require('react');
//var WeatherState = require('WeatherState');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
	getInitialState() {
		return {
			isLoading: false
		}	
	},
	handleSearch: function(location){
		var that = this;

		//debugger;

		this.setState({
			isLoading: true,
			errorMessage: undefined
		});
		openWeatherMap.getTemp(location).then(function (temp){
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function (e) {
			that.setState({
				isLoading: false,
				errorMessage: e.message
			});
			
		});
	},
	render: function(){
		var {temp, location, isLoading, errorMessage} = this.state;

		function renderMessage(){
			if(isLoading){
				return <h3 className="text-centered">Fetching Weather...</h3>
			} else if(temp && location){
				
				return (<WeatherMessage temp={temp} location={location}/>);
			}
		}
		function renderError(){
			 if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
		}
		return(
			<div>
				<h1 className="text-centered page-title">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
			);
	}
});

module.exports = Weather;