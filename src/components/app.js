import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WeatherList from '../containers/weather_list';
import JumbotronInstance1 from './jumbotron1';
import JumbotronInstance2 from './jumbotron2';

export default class App extends Component {
  render() {
    return (
      <div>
      	<JumbotronInstance1 />
      	<JumbotronInstance2 />
      	<JumbotronInstance2 />
      	<SearchBar />
      	<MuiThemeProvider>
    			<WeatherList />
  			</MuiThemeProvider>
      </div>

    );
  }
}
