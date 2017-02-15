import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.query.results.channel.location.city;

		const dates = cityData.query.results.channel.item.forecast.map(weather => weather.date);
		const lowTemps = cityData.query.results.channel.item.forecast.map(weather => weather.low);
		const highTemps = cityData.query.results.channel.item.forecast.map(weather => weather.high);
		const descriptions = cityData.query.results.channel.item.forecast.map(weather => weather.text);

		
		console.log(descriptions);

		return (
			<tr key={name}>
				<td>{name}</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Low Temperature</th>
						<th>High Temperature</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);