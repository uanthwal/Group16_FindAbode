/**
 * @author Parsad Upendra(upendra@dal.ca)
 * BANNER ID: B00838095
 */

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../css/apartment/ApartmentCard.scss";
import Axios from "axios";
import { APP_URL_CONFIG } from "../../App.Urls";

class ApartmentCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardContent: this.props.cardContent,
      cardLoadReqFrom: this.props.cardLoadReqFrom,
    };
    this.onClickExplorePlace = this.onClickExplorePlace.bind(this);
    this.onClickDeleteIcon = this.onClickDeleteIcon.bind(this);
    this.onClickEditPlace = this.onClickEditPlace.bind(this);
  }

  onClickDeleteIcon = async (id) => {
    await Axios.post(
      APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.DELETE_APARTMENT,
      { apartment_id: id }
    ).then((res) => {
      alert(res["data"]["message"]);
      this.props.onDeleteHandler();
    });
  };

  onClickExplorePlace(id) {
    this.props.history.push({
      pathname: "/search/" + id,
    });
  }

  onClickEditPlace(id) {
    this.props.history.push({
      pathname: "/manage-apartment/" + id,
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
            {this.state.cardLoadReqFrom === "R" ? (
              <button
                onClick={this.onClickExplorePlace.bind(
                  this,
                  this.state.cardContent._id
                )}
              >
                EXPLORE
              </button>
            ) : (
              <div>
                <button
                  onClick={this.onClickEditPlace.bind(
                    this,
                    this.state.cardContent._id
                  )}
                >
                  <i className="fa fa-edit"></i>
                </button>
                <button
                  className="delete"
                  onClick={this.onClickDeleteIcon.bind(
                    this,
                    this.state.cardContent._id
                  )}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            )}
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(ApartmentCardComponent);
