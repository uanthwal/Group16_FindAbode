import React, { Component } from 'react';
import axios from 'axios';

import '../../css/careers/careers.css';
import OpenPosition from './OpenPositions';
import Departments from './Departments';
import Links from '../Links';
import Footer from '../Footer';
import { APP_URL_CONFIG } from '../../App.Urls';

export default class Careers extends Component {
	state = {
		departments: [
			// {
			// 	key: 'it_dept',
			// 	name: 'IT Department',
			// 	classes: 'selected',
			// 	selected: true
			// },
			// {
			// 	key: 'sales_dept',
			// 	name: 'Sales Department',
			// 	classes: '',
			// 	selected: false
			// }
		],
		selectDept: -1,
		sideBarVisible: false
	};

	getAllDepartments = async () => {
		await axios.get(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.JOB_DEPARTMENTS, {}).then((res) => {
			console.log(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.JOB_DEPARTMENTS);
			console.log('Data received');
			let departments = res.data;
			let selectedDept = -1;
			//console.log(departments);

			let jobDepartment = [];
			for (let i = 0; i < departments.length; i++) {
				jobDepartment[i] = {
					key: departments[i].deptId,
					selected: false,
					classes: '',
					name: departments[i].name
				};
			}

			this.setState({
				departments: jobDepartment
			});
		});
	};

	getDepartmentJobs = async () => {
		if (this.state.departments.length > 0) {
			await axios
				.get(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.JOB_LIST + '?deptId=' + this.state.departments[0].key, {})
				.then((res) => {
					console.log('Data received for department');
				});
		}
	};

	componentDidMount = () => {
		this.getAllDepartments();
	};

	handleDeptClick = (deptKey) => {
		const departmentList = this.state.departments;
		const selectedDept = deptKey;
		for (let i = 0; i < departmentList.length; i++) {
			console.log(departmentList[i].classes + ' ' + departmentList[i].key + ' ' + departmentList[i].name);
			if (departmentList[i].key === deptKey) {
				departmentList[i].selected = true;
				departmentList[i].classes = 'selected';
			} else {
				departmentList[i].selected = false;
				departmentList[i].classes = '';
			}
		}
		this.setState(() => {
			return { departments: departmentList, selectDept: selectedDept };
		});
		console.log('Selected Dept is ' + this.state.selectDept);
	};

	render() {
		let deptList = this.state.departments;

		return (
			<div style={{ paddingTop: 65 }} className="careerPage">
				<div className="careersBody">
					<div className="carrerHeading container">
						<h3>Open Positions</h3>
						<small>Lets take a step ahead and grow together</small>
					</div>
					<div className="openPostionsLayer container-fluid">
						<div className="departments">
							<ul>
								{deptList.map((dept) => (
									<Departments
										classes={dept.classes}
										deptClick={this.handleDeptClick}
										departmentName={dept.name}
										index={dept.key}
										selected={dept.selected}
										key={dept.key}
									/>
								))}
							</ul>
						</div>
						<OpenPosition selectedDept={this.state.selectDept} />
					</div>
				</div>
				<Links />
				<Footer />
			</div>
		);
	}
}
