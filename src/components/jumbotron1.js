import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';

class JumbotronInstance1 extends Component {
	render() {
		return (
			<Jumbotron className="parallax">
				<h2 className="contrast">Welcome to Weather with Redux</h2>
				<p className="contrast">Search your Favorite City to Get Started</p>
			</Jumbotron>
		)
	}
}

export default JumbotronInstance1;

