/**
 * @author Ruminder Singh <ruminder.singh@dal.ca>
 * @file It is main file for collecting user review.
 */

import React, { Component } from 'react';
import axios from 'axios';
import { APP_URL_CONFIG } from '../../App.Urls';
import '../../css/rating/rating.css';

export default class Rating extends Component {
	handleSubmit = async (event) => {
		event.preventDefault();
		console.log('Checking');
		const data = new FormData(event.target);
		await axios
			.post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.APPLY_JOB, data, {
				headers: {
					Accept: 'application/json'
				}
			})
			.then((response) => {
				console.log(response.status);
				if (response.status === 202) {
					this.setState({ errorMsg: 'Successfully submitted the data' });
				} else {
					this.setState({ applicationSubmitted: true });
				}
				console.log('Saved');
			});
	};
	render() {
		return (
			<div className="ratingPage">
				<div className="inner">
					<form onSubmit={this.handleSubmit}>
						<h3>Rate the visited property</h3>
						<p>
							Kindly rate the property on different parameters 1 being lowest rating and 5 is maximum
							rating
						</p>
						<div class="form-group">
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
						<div class="form-group">
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
						<div class="form-group">
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
						<div class="form-group">
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
						<div class="form-group">
							<label>Comments you want to post on this property page on FindAbode</label>
							<textarea class="form-control" id="comments" name="comments" rows="3" />
						</div>
						<button>Submit</button>
					</form>
				</div>
			</div>
		);
	}
}
