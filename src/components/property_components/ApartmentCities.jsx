/**
 * @author Parsad Upendra(upendra@dal.ca)
 * BANNER ID: B00838095
 */

import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../css/apartment/Apartment.css";

class ApartmentCitiesComponent extends Component {
  state = {
    cities: [
      {
        id: "toronto",
        name: "Toronto",
      },
      {
        id: "halifax",
        name: "Halifax",
      },
      {
        id: "montreal",
        name: "Montreal",
      },
      {
        id: "ottawa",
        name: "Ottawa",
      },
    ],
  };

  viewDetail = (e, id) => {
    e.preventDefault();
    this.props.history.push({
      pathname: "/search-results",
      search: "?query=" + id,
    });
  };

  render() {
    return (
      <section className="section-apartments">
        <div className="timeline">
          <h1>We're currently in these cities</h1>
        </div>
        <div className="apartments-containers">
          {this.state.cities.map((item, index) => {
            return (
              <div
                onClick={(e) => this.viewDetail(e, item.id)}
                key={index}
                className="card-container"
              >
                <img
                  className="card-img"
                  alt={item.name}
                  src={require(`./../../images/${item.id}.jpg`)}
                />
                <div className="text-container">
                  <p className="text-title">{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/search-apartment">
          <button className="view-more" style={{ outline: "none" }}>View More</button>
        </Link>
      </section>
    );
  }
}
export default withRouter(ApartmentCitiesComponent);
