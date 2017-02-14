import React, { Component } from 'react';

export default class SearchBar extends Component {
	// the constructor function is making the button a controlled field
	constructor(props) {
		super(props);

		this.state = { term: ''};
	}

	// all dom handlers come with an event object 
	onInputChange(event) {
		console.log(event.target.value);
	}

	render() {
		return (
			<form className="input-group">
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

