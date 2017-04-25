var React = require('react');

var WeatherMessage = ({temp, location}) => <p className="text-centered">Its {temp} in {location} </p>

module.exports = WeatherMessage;