import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ''};

		this.onInputChange = this.onInputChange.bind(this);
		// breakdown of the above line of code:
			// this (which is our instance of search bar) has a function called onInputChange.
			// bind that function to 'this' (which is search bar) and then replace onInputChange with this
			// new bound instance of this function
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	// all dom handlers come with an event object 
	// the below function is making the input a controlled field
	onInputChange(event) {
		// console.log(event.target.value);
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		// we need to go and fetch weather data
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			<div className="search-bar">
				<form onSubmit={this.onFormSubmit} className="input-group">
					<input 
						placeholder="Example: san francisco, ca"
						className="form-control"
						value={this.state.term}
						onChange={this.onInputChange}
					/>
					<span className="input-group-btn">
						<button type="submit" className="btn btn-secondary">Submit</button>
					</span>
				</form>
			</div>
		);
	}
}

// connect our search bar container to redux using connect method from react-redux
// bind the action creator fetchWeather as a property to this container
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
















