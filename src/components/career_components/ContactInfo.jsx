import React, { Component } from 'react';

export default class ContactInfo extends Component {
	state = {
		open: this.props.open,
		content: this.props.content,
		title: this.props.title,
		key: this.props.key
	};

	render() {
		return (
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
					<input type="file" required placeholder="Uplpad File" name="resume" class="form-control" />
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
					{' '}
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
		);
	}
}
