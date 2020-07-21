import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../css/apartment/ApartmentCard.scss";

class ApartmentCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardContent: this.props.cardContent,
      cardLoadReqFrom: this.props.cardLoadReqFrom
    };
    this.onClickExplorePlace = this.onClickExplorePlace.bind(this);
  }

  onClickExplorePlace(id) {
    this.props.history.push({
      pathname: "/search/" + id,
    });
  }

  render() {
    return (
          <div className="grid-item">
            <div className="img-blck">
              <img
                alt={this.state.cardContent.name}
                src={this.state.cardContent.images[0]}
              />
            </div>
            <div className="cntnt-blck">
              <span className="place-name">{this.state.cardContent.name}</span>
              <span className="place-desc">
                {this.state.cardContent.number_of_guests} ·{" "}
                {this.state.cardContent.number_of_bedroom} ·{" "}
                {this.state.cardContent.number_of_beds} ·{" "}
                {this.state.cardContent.number_of_baths}
              </span>
              <span className="place-province">
                {`PRICE: CAD ${this.state.cardContent.price}`}
              </span>
              <span className="place-province">
                RATING: {this.state.cardContent.rating}
              </span>
              <span className="place-book">
                <button
                  onClick={this.onClickExplorePlace.bind(
                    this,
                    this.state.cardContent._id
                  )}
                >
                  EXPLORE
                </button>
              </span>
            </div>
          </div>
    );
  }
}

export default withRouter(ApartmentCardComponent);
