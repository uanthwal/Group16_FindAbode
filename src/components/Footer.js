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
							<Link to="" className="footer-link">
								Privacy & cookies
							</Link>
						</li>
						<li>
							<Link to="" className="footer-link">
								Terms of use
							</Link>
						</li>
						<li>
							<Link to="" className="footer-link">
								Safety & eco
							</Link>
						</li>
						<li>
							<Link to="" className="footer-link">
								About our ads
							</Link>
						</li>
						<li>
							<Link to="" className="footer-link">
								&copy; FindAbode 2020
							</Link>
						</li>
					</ul>
				</div>
			</footer>
		);
	}
}
export default Footer;
