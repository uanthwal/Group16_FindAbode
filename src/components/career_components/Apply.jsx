import React, { Component } from 'react';
import ContactInfo from './ContactInfo';
import '../../css/careers/apply.css';

export default class Apply extends Component {
	state = {
		open: this.props.open,
		content: this.props.content,
		title: this.props.title,
		key: this.props.key
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log('Checking');
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
									/>
								</div>
								<div className="form-group">
									<textarea
										className="form-control"
										id="coverletter"
										name="coverletter"
										rows="3"
										placeholder="Cover Letter"
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
											placeholder="Relevant number of experience"
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
