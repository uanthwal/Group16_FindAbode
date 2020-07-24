import React, { Component } from 'react';
import axios from 'axios';
import ContactInfo from './ContactInfo';
import { APP_URL_CONFIG } from '../../App.Urls';
import '../../css/careers/apply.css';

export default class Apply extends Component {
	state = {
		open: this.props.open,
		content: this.props.content,
		title: this.props.title,
		key: this.props.key,
		selectedFile: null
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		console.log('Checking');
		const query = new URLSearchParams(this.props.location.search);
		let jobId = query.get('jobId');
		const data = new FormData(event.target);
		let jsonData = new FormData();
		console.log(this.state.selectedFile);
		jsonData.append('file', this.state.selectedFile);
		jsonData.append('name', data.get('name'));
		jsonData.append('email', data.get('email'));
		jsonData.append('mobile', data.get('mobile'));
		jsonData.append('coverLetter', data.get('coverletter'));
		jsonData.append('currentCity', data.get('city'));
		jsonData.append('experience', data.get('experience'));
		jsonData.append('college', data.get('college'));
		jsonData.append('ctc', data.get('ctc'));
		jsonData.append('organization', data.get('organization'));
		jsonData.append('jobId', jobId);

		await axios
			.post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.APPLY_JOB, jsonData, {
				headers: {
					Accept: 'application/json'
				}
			})
			.then((response) => {
				console.log('Saved');
			});
	};

	onChangeHandler = (event) => {
		let file = event.target.files[0];
		let fileExten = file.name.split('.');
		if (fileExten[1] !== 'pdf') {
			alert('Kindly uplaod pdf file only');
			event.target.value = null;
		} else {
			this.setState({
				selectedFile: file
			});
		}
	};
	render() {
		const query = new URLSearchParams(this.props.location.search);
		let jobId = query.get('jobId');
		let title = query.get('title');

		return (
			<div style={{ paddingTop: 65 }} className="applyPage">
				<h3 className="title">Applying to {title} position</h3>
				<div className="jobApplyBody">
					<div className="layer">
						<form className="applyForm" onSubmit={this.handleSubmit}>
							<div>
								<label for="Personal Information">
									Personal Information <span className="required">*</span>
								</label>
								<div className="form-row">
									<div className="form-group col-md-6">
										<input
											type="text"
											className="form-control"
											id="name"
											name="name"
											placeholder="Your full name"
											required
										/>
									</div>
									<div className="form-group col-md-6">
										<input
											type="email"
											className="form-control"
											id="email"
											name="email"
											placeholder="Your email"
											required
										/>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<input
											type="text"
											className="form-control"
											id="name"
											name="mobile"
											placeholder="Your mobile number"
											required
										/>
									</div>
									<div className="form-group col-md-6" />
								</div>
								<div className="form-group file">
									<label>
										Upload your resume.<span className="required">*</span>
									</label>
									<input
										type="file"
										required
										title="Uplpad your resume"
										name="resume"
										class="form-control"
										onChange={this.onChangeHandler}
									/>
								</div>
								<div className="form-group">
									<textarea
										className="form-control"
										id="coverletter"
										name="coverletter"
										rows="3"
										placeholder="Cover Letter"
										required
									/>
								</div>
								<label>
									Questions <span className="required">*</span>
								</label>
								<div className="form-row">
									<div className="form-group col-md-6">
										<input
											type="text"
											className="form-control"
											id="name"
											name="city"
											placeholder="Your current city"
											required
										/>
									</div>
									<div className="form-group col-md-6">
										<input
											type="number"
											className="form-control"
											id="experience"
											name="experience"
											placeholder="Relevant no. of experience in months"
											required
										/>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<input
											type="text"
											className="form-control"
											id="name"
											name="college"
											placeholder="Your college name"
											required
										/>
									</div>
									<div className="form-group col-md-6">
										<input
											type="number"
											className="form-control"
											id="ctc"
											name="ctc"
											placeholder="Current annual compensation"
											required
										/>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<input
											type="text"
											className="form-control"
											id="name"
											name="organization"
											placeholder="Your current oraganization"
											required
										/>
									</div>
									<div className="form-group col-md-6" />
								</div>
							</div>

							<button type="submit" className="btn btn-primary applyBtn">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
