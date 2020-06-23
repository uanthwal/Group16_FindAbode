import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../../css/careers/openpositions.css';
import CollapsePosition from './CollapsePosition';

export default class OpenPosition extends Component {
	state = {
		open: false,
		toggleMenu: this.toggleMenu,
		positionList: [
			{
				key: 1,
				open: false,
				title: 'Software Engineer (JobId: 21123)',
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			},
			{
				key: 2,
				open: false,
				title: 'Software Engineer (JobId: 21124)',
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			},
			{
				key: 3,
				open: false,
				title: 'Senior Software Engineer (JobId: 21125)',
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			}
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

	render() {
		const show = this.state.open ? 'show' : '';
		const positionList =
			this.props.selectedDept === 'it_dept' ? this.state.positionList : this.state.salesPositionList;
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
						<CollapsePosition open={item.open} content={item.content} title={item.title} key={item.key} />
					))}
				</div>
			</div>
		);
	}
}
