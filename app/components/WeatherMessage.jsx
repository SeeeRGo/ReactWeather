var React = require('react');

var WeatherMessage = ({temp, location}) => <p>Its {temp} in {location} </p>

module.exports = WeatherMessage;