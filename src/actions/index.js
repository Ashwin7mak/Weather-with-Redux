import axios from 'axios';

const ROOT_URL = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22:city%22)&format=json&diagnostics=true&callback=`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = ROOT_URL.replace(/:city/, city)
	const request = axios.get(url);

	// console.log(request.query.results.channel);
	// console.log('Request:', request);
	
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}