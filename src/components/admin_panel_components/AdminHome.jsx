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
    this.onClickExplorePlace = this.onClickExplorePlace.bind(this);
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

  onClickExplorePlace(id) {
    this.props.history.push({
      pathname: "/search/" + id,
    });
  }

  render() {
    return (
      <div>
        <div className="search-r-container">
          <div></div>
          <div className="search-results-section">
            <span className="search-r-txt-header">
              Results({this.state.placesData.length})
            </span>
            <div className="searched-place-holder">
              <div className="grid-row">
                {this.state.placesData.map((element) => (
                  <ApartmentCardComponent cardLoadReqFrom="A" cardContent={element} key={element._id}/>
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
