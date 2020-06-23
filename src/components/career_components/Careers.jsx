import React, { Component } from 'react';

import '../../css/careers/careers.css';
import OpenPosition from './OpenPositions';
import Departments from './Departments';

export default class Careers extends Component {
	state = {
		departments: [
			{
				key: 'it_dept',
				name: 'IT Department',
				classes: 'selected',
				selected: true
			},
			{
				key: 'sales_dept',
				name: 'Sales Department',
				classes: '',
				selected: false
			}
		],
		selectDept: 'it_dept',
		sideBarVisible: false
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
		this.setState({ departments: departmentList, selectDept: selectedDept });
	};
	sidebarButtonClickHandler = () => {
		this.setState((previousState) => {
			return { sideBarVisible: !previousState.sideBarVisible };
		});
	};
	outSideOfSideBarClicked = () => {
		this.setState({ sideBarVisible: false });
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
									/>
								))}
							</ul>
						</div>
						<OpenPosition selectedDept={this.state.selectDept} />
					</div>
				</div>
			</div>
		);
	}
}
