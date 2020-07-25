/**
 * @author Ruminder Singh <ruminder.singh@dal.ca>
 */

import React, { Component } from 'react';
import axios from 'axios';

import '../../css/careers/openpositions.css';
import CollapsePosition from './CollapsePosition';
import { APP_URL_CONFIG } from '../../App.Urls';

export default class OpenPosition extends Component {
	state = {
		open: false,
		toggleMenu: this.toggleMenu,
		prevDept: -1,
		positionList: [
			// {
			// 	key: 1,
			// 	open: false,
			// 	title: 'Software Engineer (JobId: 21123)',
			// 	content:
			// 		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			// },
			// {
			// 	key: 2,
			// 	open: false,
			// 	title: 'Software Engineer (JobId: 21124)',
			// 	content:
			// 		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			// },
			// {
			// 	key: 3,
			// 	open: false,
			// 	title: 'Senior Software Engineer (JobId: 21125)',
			// 	content:
			// 		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			// }
		],

		salesPositionList: [
			{
				key: 1,
				open: false,
				title: 'Customer Satisfaction (JobId: 21323)',
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			},
			{
				key: 2,
				open: false,
				title: 'Sales Associates (JobId: 21324)',
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			},
			{
				key: 3,
				open: false,
				title: 'Senior Manager (JobId: 21125)',
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			}
		]
	};

	getDepartmentJobs = async () => {
		console.log('Rendering Open positions with props id' + this.props.selectedDept);
		await axios
			.get(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.JOB_LIST + '?deptId=' + this.props.selectedDept, {})
			.then((res) => {
				console.log('Data received for department' + res.data);
				let jobList = res.data;
				if (jobList.length != null && jobList.length > 0) {
					let jobDetails = [];
					for (let i = 0; i < jobList.length; i++) {
						jobDetails[i] = {
							jobId: jobList[i].jobId,
							title: jobList[i].title,
							desc: jobList[i].desc,
							deptId: jobList[i].deptId,
							open: false
						};
					}
					this.setState(() => {
						return { positionList: jobDetails };
					});
				}
			});
	};

	componentDidMount() {
		this.getDepartmentJobs();
	}

	render() {
		let dept = this.state.prevDept;
		let prevDept = this.props.selectedDept;
		if (prevDept != dept) {
			this.getDepartmentJobs();
			this.setState(() => {
				return { prevDept: this.props.selectedDept };
			});
		}
		const show = this.state.open ? 'show' : '';
		const positionList = this.state.positionList;
		// this.props.selectedDept === 'it_dept' ? this.state.positionList : this.state.salesPositionList;
		console.log(positionList);
		return (
			<div className="openings">
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
				<div className="openingHeading">
					<h2>Current Openings</h2>
				</div>
				<div className="openPostions" id="accordion">
					{positionList.map((item) => (
						<CollapsePosition
							open={item.open}
							content={item.desc}
							title={item.title}
							jobId={item.jobId}
							key={item.key}
						/>
					))}
				</div>
			</div>
		);
	}
}
