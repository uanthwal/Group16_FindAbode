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
      placesData: [],
      placesDataCopy: [],
      searchIp: "",
    };
    this.onChangeSearchIp = this.onChangeSearchIp.bind(this);
  }

  // Method to fetch the list of present apartments in the database
  getAllPlaces = async () => {
    await axios
      .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.GET_ALL_PLACES, {})
      .then((res) => {
        this.setState({
          placesData: res.data["data"],
          placesDataCopy: res.data["data"],
        });
      });
  };

  componentDidMount() {
    if (!this.context.isUserLoggedIn()) {
      this.props.history.push({
        pathname: "/signin/",
        search: "?r=" + window.location.pathname,
      });
      return;
    }
    this.getAllPlaces();
  }

  // Method to redirect the user to enable addition of new place
  onChangeSearchIp() {
    if (this.state.searchIp.value.trim() !== "") {
      let tempSearchTxt = this.state.searchIp.value;
      let filteredApartments = this.state.placesDataCopy.filter(function (
        element
      ) {
        if (
          element.name.toLowerCase().indexOf(tempSearchTxt.toLowerCase()) >
            -1 ||
          element.description
            .toLowerCase()
            .indexOf(tempSearchTxt.toLowerCase()) > -1 ||
          element.address.toLowerCase().indexOf(tempSearchTxt.toLowerCase()) >
            -1 ||
          element.postal_code
            .toLowerCase()
            .indexOf(tempSearchTxt.toLowerCase()) > -1 ||
          element.price.toLowerCase().indexOf(tempSearchTxt.toLowerCase()) >
            -1 ||
          element.number_of_guests
            .toLowerCase()
            .indexOf(tempSearchTxt.toLowerCase()) > -1 ||
          element.number_of_bedroom
            .toLowerCase()
            .indexOf(tempSearchTxt.toLowerCase()) > -1 ||
          element.number_of_baths
            .toLowerCase()
            .indexOf(tempSearchTxt.toLowerCase()) > -1 ||
          element.amenities.indexOf(tempSearchTxt.toLowerCase()) > -1
        ) {
          return element;
        }
      });
      this.setState({
        placesData: JSON.parse(JSON.stringify(filteredApartments)),
      });
    } else {
      this.setState({
        placesData: JSON.parse(JSON.stringify(this.state.placesDataCopy)),
      });
    }
  }

  // Method to refresh the apartment list once an exisiting apartment is deleted
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
              <input
                type="text"
                placeholder="Filter by name, address, city, description, price"
                ref={(searchIp) => (this.state.searchIp = searchIp)}
                onChange={this.onChangeSearchIp}
              />
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
