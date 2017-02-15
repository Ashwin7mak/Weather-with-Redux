import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<MuiThemeProvider>
    			<WeatherList />
  			</MuiThemeProvider>
      </div>

    );
  }
}
