import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ''};

		this.onInputChange = this.onInputChange.bind(this);
		// breakdown of the above line of code:
			// this (which is our instance of search bar) has a function called onInputChange.
			// bind that function to 'this' (which is search bar) and then replace onInputChange with this
			// new bound instance of this function
	}

	// all dom handlers come with an event object 
	// the below function is making the input a controlled field
	onInputChange(event) {
		// console.log(event.target.value);
		this.setState({ term: event.target.value });
	}

	onFormSubmit() {
		
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a 10-Day Forecast by Searching for Your City"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

