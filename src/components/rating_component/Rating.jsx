/**
 * @author Ruminder Singh <ruminder.singh@dal.ca>
 * @file It is main file for collecting user review.
 */

import React, { Component } from 'react';
import axios from 'axios';
import { APP_URL_CONFIG } from '../../App.Urls';
import '../../css/rating/rating.css';

export default class Rating extends Component {
	state = {
		applicationSubmitted: false
	};
	handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.target);
		const query = new URLSearchParams(this.props.location.search);
		let apartmentId = data.get('apartment_id');
		if (query.get('apartment_id') == null) {
			alert('You are not eligible to fill this survey or kindly check the link sent to you');
			return;
		}
		apartmentId = query.get('apartment_id');
		await axios
			.post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.SAVE_RATING, {
				cleanliness: data.get('cleanliness'),
				apartment_id: apartmentId,
				communication: data.get('communication'),
				comment: data.get('comment'),
				accuracy: data.get('accuracy'),
				location: data.get('location')
			})
			.then((response) => {
				if (response.status === 200) {
					this.setState({ applicationSubmitted: true });
				} else {
					alert('Error occured. Please try again');
				}
			});
	};
	render() {
		let ratingView;
		if (this.state.applicationSubmitted) {
			ratingView = <h3>Form submitted succesfully</h3>;
		} else {
			ratingView = <form onSubmit={this.handleSubmit}>
						<h3>Rate the visited property</h3>
						<p>
							Kindly rate the property on different parameters 1 being lowest rating and 5 is maximum
							rating
						</p>
						<input type="hidden" id="apartment_id" name="apartment_id" value='5f162e2294e0f6eff8e61da9'/>
						<div className="form-group">
							<label>Cleaniness</label>
							<select className="form-control" id="cleanliness" name="cleanliness" required>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option selected="selected" value="5">
									5
								</option>
							</select>
						</div>
						<div className="form-group">
							<label>Communication</label>
							<select className="form-control" id="communication" name="communication" required>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option selected="selected" value="5">
									5
								</option>
							</select>
						</div>
						<div className="form-group">
							<label>Location</label>
							<select className="form-control" id="location" name="location" required>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option selected="selected" value="5">
									5
								</option>
							</select>
						</div>
						<div className="form-group">
							<label>Accuracy of data posted on the post</label>
							<select className="form-control" id="accuracy" name="accuracy" required>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option selected="selected" value="5">
									5
								</option>
							</select>
						</div>
						<div className="form-group">
							<label>Comments you want to post on this property page on FindAbode</label>
							<textarea className="form-control" id="comment" name="comment" rows="3" />
						</div>
						<button>Submit</button>
					</form>
		}
		return (
			<div className="ratingPage">
				<div className="inner">{ratingView}</div>
			</div>
		);
	}
}
