import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.query.results.channel.location.city;

		const dates = cityData.query.results.channel.item.forecast.map(weather => weather.date);
		const low_temps = cityData.query.results.channel.item.forecast.map(weather => weather.low);
		const high_temps = cityData.query.results.channel.item.forecast.map(weather => weather.high);

		console.log(low_temps);
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
						<th>Pressure</th>
						<th>Humidity</th>
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