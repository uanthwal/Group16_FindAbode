import React, { Component } from "react";
import launch from "../images/launch.png";
import "../css/Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <section className="header-container">
        <div className="header-text">
          <h1>Find the best places to stay quickly</h1>
          <span className="square" />
          <p>
            Welcome to FindAbode!
            <br />
            You don't need to go far to find what matters! Explore the platform
            and find the best place to stay.
          </p>
          <Link to="/about">
            <button className="common-btn" style={{ outline: "none" }}>Read More</button>
          </Link>
        </div>
        <img className="launch" src={launch} alt="launch page" />
      </section>
    );
  }
}
export default Header;
