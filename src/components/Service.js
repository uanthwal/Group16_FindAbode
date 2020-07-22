import React, { Component } from "react";
import "../css/Service.css";

class Service extends Component {
  render() {
    return (
      <section className="features">
        <h1 className="timeline service-provide">SERVICES PROVIDED</h1>
        <br />
        <div className="section-features">
          <div className="feature-box">
            <h3 className="feature-heading">Explore the world</h3>
            <p className="feature-box-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur.
            </p>
          </div>

          <div className="feature-box">
            <h3 className="feature-heading">Meet nature</h3>
            <p className="feature-box-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur.
            </p>
          </div>

          <div className="feature-box">
            <h3 className="feature-heading">Find your way</h3>
            <p className="feature-box-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur.
            </p>
          </div>

          <div className="feature-box">
            <h3 className="feature-heading">Live a healthier life</h3>
            <p className="feature-box-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Service;
