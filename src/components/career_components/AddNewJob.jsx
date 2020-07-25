/**
 * @author Ruminder Singh <ruminder.singh@dal.ca>
 */

import React, { Component } from 'react';
import axios from 'axios';
import '../../css/careers/openpositions.css';

import { APP_URL_CONFIG } from '../../App.Urls';

export default class AddNewJob extends Component {
	state = {
		open: false,
		toggleMenu: this.toggleMenu,
		prevDept: -1,
		positionList: []
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		console.log('Checking');
		const data = new FormData(event.target);
		console.log(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.ADD_JOB);
		await axios
			.post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.ADD_JOB, {
				jobId: data.get('jobId'),
				deptId: data.get('deptId'),
				desc: data.get('desc'),
				title: data.get('title')
			})
			.then((response) => {
				console.log(response.status);
				if (response.status === 202) {
					alert(response.data);
				} else {
					alert('Job added successfully');
					document.getElementById('newJob').reset();
				}
				console.log('Saved');
			});
	};

	render() {
		const show = this.state.open ? 'show' : '';
		const positionList = this.state.positionList;
		console.log(positionList);
		return (
			<div className="openings">
				<div className="openingHeading">
					<h2>Add new Job</h2>
				</div>
				<form className="applyForm" id="newJob" onSubmit={this.handleSubmit}>
					<div class="form-group">
						<input type="number" class="form-control" id="jobId" name="jobId" placeholder="Enter jobId" />
					</div>
					<div class="form-group">
						<input
							type="number"
							class="form-control"
							id="deptId"
							name="deptId"
							placeholder="Enter Department ID"
						/>
					</div>
					<div class="form-group">
						<input type="text" class="form-control" id="title" name="title" placeholder="Enter Title" />
					</div>
					<div className="form-group">
						<textarea
							className="form-control"
							id="desc"
							name="desc"
							rows="6"
							placeholder="Enter description of job"
							required
						/>
					</div>
					<button type="submit" className="btn btn-primary applyBtn">
						Submit
					</button>
				</form>
			</div>
		);
	}
}
