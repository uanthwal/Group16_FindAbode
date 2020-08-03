import React, { Component } from "react";
import "../css/Service.css";

class Service extends Component {
  render() {
    return (
      <section className="features">
        <h1 className="timeline service-provide">SERVICES PROVIDED</h1>
        <div className="section-features">
          <div className="feature-box">
            <h3 className="feature-heading">Explore the world</h3>
            <p className="feature-box-text">
              FindAbode is becoming a remarkable place to list and book
              accommodation effortlessly, across Halifax and other regions of
              Canada.
            </p>
          </div>

          <div className="feature-box">
            <h3 className="feature-heading">Meet Ours</h3>
            <p className="feature-box-text">
              Join our FindAbode family for quality and affordable services by
              FindAbode platforms.
            </p>
          </div>

          <div className="feature-box">
            <h3 className="feature-heading">Find your way</h3>
            <p className="feature-box-text">
              FindAbode is considered to be the future of Vacation/Rental
              property management service platforms.
            </p>
          </div>

          <div className="feature-box">
            <h3 className="feature-heading">Less Paid</h3>
            <p className="feature-box-text">
              You can also feature your property listing starting from CA20$ a
              month.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Service;
