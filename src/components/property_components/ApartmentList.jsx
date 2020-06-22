import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import launch from '../../images/launch.png';
import '../../css/apartment/Apartment.css';

class Apartment extends Component {
	state = {
		featureRoom: [
			{
				id: '1',
				subTitle: '3 beds 2 baths',
				title: 'Modern home in the heart of historic Halifax',
				desc: '$1,900.00 ',
				descTail: '/ month',
				review: '4/5 stars ',
				reviewTail: '(based on 34 reviews)'
			},
			{
				id: '2',
				subTitle: '3 beds 2 baths',
				title: 'Modern home in the heart of historic Halifax',
				desc: '$1,900.00 ',
				descTail: '/ month',
				review: '4/5 stars ',
				reviewTail: '(based on 34 reviews)'
			},
			{
				id: '3',
				subTitle: '3 beds 2 baths',
				title: 'Modern home in the heart of historic Halifax',
				desc: '$1,900.00 ',
				descTail: '/ month',
				review: '4/5 stars ',
				reviewTail: '(based on 34 reviews)'
			},
			{
				id: '4',
				subTitle: '3 beds 2 baths',
				title: 'Modern home in the heart of historic Halifax',
				desc: '$1,900.00 ',
				descTail: '/ month',
				review: '4/5 stars ',
				reviewTail: '(based on 34 reviews)'
			}
		]
	};
	viewDetail = (e, id) => {
		e.preventDefault();
		this.props.history.push({
			pathname: '/search/' + id
		});
	};

	render() {
		return (
			<section className="section-apartments">
				<div className="timeline">
					<h1>We're currently in these cities</h1>
				</div>

				<div className="apartments-containers">
					{this.state.featureRoom.map((item, index) => {
						return (
							<div onClick={(e) => this.viewDetail(e, item.id)} key={index} className="card-container">
								<img src={launch} className="card-img" alt="aprts showcases" />
								<div className="text-container">
									<p className="text-subtitle">{item.subTitle}</p>
									<p className="text-title">{item.title}</p>
									<p className="text-desc">
										{item.desc}
										<span className="text-tiny">{item.descTail}</span>
									</p>
									<p className="text-review">
										{item.review}
										<span className="text-tiny">{item.reviewTail}</span>
									</p>
								</div>
							</div>
						);
					})}
				</div>
				<Link to="/search">
					<button className="view-more">View More</button>
				</Link>
			</section>
		);
	}
}
export default withRouter(Apartment);
