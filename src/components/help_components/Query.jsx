import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Query extends Component {
	render() {
		return (
			<div className="openings">
				<form className="form">
					<div className="form-group">
						<label>Title</label>
						<input type="text" className="form-control" placeholder="Enter title" />
					</div>
					<div className="form-group">
						<label for="exampleFormControlTextarea1">Query</label>
						<textarea className="form-control" rows="3" />
					</div>
					<button className="btn">
						<Link to="/">Send Query</Link>
					</button>
				</form>
			</div>
		);
	}
}
