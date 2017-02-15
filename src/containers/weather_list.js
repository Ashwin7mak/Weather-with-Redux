import React, { Component } from 'react';
import { connect } from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 650,
    height: 500,
    overflowY: 'auto',
  },
};

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.query.results.channel.location.city;
		const forecast = cityData.query.results.channel.item.forecast;

		forecast.map((day) => {
			if ((day.code >= 0 && day.code <= 4) || (day.code >= 37 && day.code <= 39) || (day.code >= 44 && day.code <= 47)) {
  			day["image"] = 'https://openclipart.org/image/2400px/svg_to_png/30163/weather-storm.png';
  		} else if ((day.code >= 5 && day.code <= 7)|| (day.code >= 13 && day.code <= 18) || (day.code >= 41 && day.code <= 43)) {
				day["image"] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Snow.svg/1024px-Snow.svg.png';
  		} else if (day.code >= 8 && day.code <= 12) {
				day["image"] = 'http://icons.iconarchive.com/icons/jaan-jaak/weather/512/rain-icon.png';
  		}	else if (day.code >= 19 && day.code <= 30) {
				day["image"] = 'http://www.newdesignfile.com/postpic/2009/10/cartoon-of-cloudy-weather-icons_79061.png';
  		} else if (day.code >= 31 && day.code <= 36) {
				day["image"] = 'http://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png';
  		} else {
				day["image"] = 'http://icons.iconarchive.com/icons/large-icons/large-weather/512/partly-cloudy-day-icon.png';
  		}
		});
		
		// console.log(forecast);

		return (
			<div key={name}>
				<h1>{name}</h1>
				<div style={styles.root}>
			    <GridList
			      cellHeight={180}
			      style={styles.gridList}
			    >
			      <Subheader>10 Day Forecast</Subheader>
			      {forecast.map((tile) => (
			      	

			        <GridTile
			          key={tile.date}
			          title={
			          	<span>{tile.date} - <b>{tile.text}</b></span>
			          }
			          subtitle={
			          	<span>High <b>{tile.high}</b> Low <b>{tile.low}</b></span>
			          }
			          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
			        >
			          <img src={tile.image} />
			        </GridTile>
			      ))}
			    </GridList>
			  </div>
			</div>
		);
	}

	render() {
		return (
			<div>
				{this.props.weather.map(this.renderWeather)}
			</div>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);