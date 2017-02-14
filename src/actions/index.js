import WEATHER_API_KEY from '.../keys.js';
import YQL from 'yql';

// const ROOT_URL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places%20where%20text%3D%22san%20francisco%2C%20ca%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const query = new YQL(`select * from weather.forecast where woeid in (select woeid from geo.places where text="${city}")`);

	query.exec(function(err, data) {
  var location = data.query.results.channel.location;
  var condition = data.query.results.channel.item.condition;
  
  console.log('The current weather in ' + location.city + ', ' + location.region + ' is ' + condition.temp + ' degrees.');
	});

	return {
		type: FETCH_WEATHER
	};
}