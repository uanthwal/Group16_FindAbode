import React, { Component } from 'react';

import '../../css/help/faq_questions.css';
import CollapseQuestion from './CollapseQuestion';

export default class FAQs extends Component {
	state = {
		open: false,
		toggleMenu: this.toggleMenu,
		faqsList: [
			{
				key: 1,
				open: false,
				title: 'How to Book Appointment?',
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			},
			{
				key: 2,
				open: false,
				title: 'How to cancel appointment?',
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			},
			{
				key: 3,
				open: false,
				title: 'How to view your shortlisted flats?',
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			}
		]
	};

	render() {
		const positionList = this.state.faqsList;
		return (
			<div className="openings">
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
				<div className="openingHeading">
					<h2>FAQs</h2>
				</div>
				<div className="openPostions" id="accordion">
					{positionList.map((item) => (
						<CollapseQuestion open={item.open} content={item.content} title={item.title} key={item.key} />
					))}
				</div>
			</div>
		);
	}
}
