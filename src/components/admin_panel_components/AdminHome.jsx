import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../../css/search/SearchResults.scss";
import { APP_URL_CONFIG } from "../../App.Urls";
import ApartmentCardComponent from "../property_components/ApartmentCard";

class AdminHomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBlurBg: false,
      placesData: [],
      searchText: this.props.location.params,
    };
    this.onClickBlogs = this.onClickBlogs.bind(this);
    this.onClickAddApartment = this.onClickAddApartment.bind(this);
  }

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
    this.getAllPlaces();
  }

  onClickBlogs(id) {
    this.props.history.push({
      pathname: "/blogadmin"
    });
  }

  onClickAddApartment() {
    this.props.history.push({
      pathname: "/add-apartment",
      apartmentDetails: {}
    });
  }

  onDeleteHandler = async() => {
    await axios
      .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.GET_ALL_PLACES, {})
      .then((res) => {
        this.setState({
          placesData: res.data["data"],
        });
      });
  }

  render() {
    return (
      <div>
        <div className="search-r-container">
          <div className="action-btn">
            <button onClick={this.onClickAddApartment}> Add Apartment </button>
            <button onClick={this.onClickBlogs}> Create Blog </button>
          </div>
          <div className="search-results-section">
            <span className="search-r-txt-header">
              Results({this.state.placesData.length})
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
