/**
 * @author Parsad Upendra(upendra@dal.ca)
 * BANNER ID: B00838095
 */

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../../css/search/SearchResults.scss";
import { APP_URL_CONFIG } from "../../App.Urls";
import ApartmentCardComponent from "../property_components/ApartmentCard";
import { UserContext } from "../../contexts/UserContext";

class AdminHomeComponent extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      showBlurBg: false,
      placesData: [],
      searchText: this.props.location.params,
    };
  }

  // Method to fetch the list of present apartments in the database
  getAllPlaces = async () => {
    await axios
      .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.GET_ALL_PLACES, {})
      .then((res) => {
        this.setState({
          placesData: res.data["data"],
        });
      });
  };

  componentDidMount() {
    if (!this.context.isUserLoggedIn()) {
      this.props.history.push({
        pathname: "/signin/",
      });
      return;
    }
    this.getAllPlaces();
  }

  // Method to refresh the apartment list if an existing apartment is removed from the list
  onDeleteHandler = async () => {
    await axios
      .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.GET_ALL_PLACES, {})
      .then((res) => {
        this.setState({
          placesData: res.data["data"],
        });
      });
  };

  render() {
    return (
      <div>
        <div className="search-r-container">
          <div className="search-results-section">
            <span className="search-r-txt-header">
              Apartment List({this.state.placesData.length})
            </span>
            <div className="searched-place-holder">
              <div className="grid-row">
                {this.state.placesData.map((element) => (
                  <ApartmentCardComponent
                    cardLoadReqFrom="A"
                    cardContent={element}
                    key={element._id}
                    onDeleteHandler={this.onDeleteHandler}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AdminHomeComponent);
