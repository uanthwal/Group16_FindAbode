import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="footer-inner">
					<div>
						<i className="fas fa-globe fa-2x" /> English (Canada)
					</div>
					<ul>
						<li>
							<Link to="/contact" className="footer-link">
								Contact FindAbode
							</Link>
						</li>
						<li>
							<Link to="/careers" className="footer-link">
								Careers
							</Link>
						</li>
						<li>
							<Link to="/faq" className="footer-link">
								FAQ
							</Link>
						</li>
						<li>
							<Link to="/blogs" className="footer-link">
								Blogs
							</Link>
						</li>
						<li>
							<Link to="/about" className="footer-link">
								About
							</Link>
						</li>
						<li>
							<Link to="/survey" className="footer-link">
								Survey
							</Link>
						</li>
						<li>
							<Link to="/discussionforum1" className="footer-link">
								Discussion Forum
							</Link>
						</li>
					</ul>
				</div>
			</footer>
		);
	}
}
export default Footer;
