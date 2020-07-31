/**
 * @author Parsad Upendra(upendra@dal.ca)
 * BANNER ID: B00838095
 */

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../css/search/SearchLanding.scss";
import ApartmentCardComponent from "./ApartmentCard";
import { APP_URL_CONFIG } from "../../App.Urls";
import Axios from "axios";

class SearchApartmentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredPlaces: [],
    };
    this.onClickSearch = this.onClickSearch.bind(this);
  }

  getFeaturedPlaces = async () => {
    await Axios.post(
      APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.GET_FEATURED_APARTMENTS,
      {}
    ).then((res) => {
      this.setState({
        featuredPlaces: res.data["data"],
      });
    });
  };

  componentDidMount() {
    this.getFeaturedPlaces();
  }

  onClickSearch(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: "/search-results",
      search: "?query=" + this.searchText.value,
      params: this.searchText.value,
    });
  }

  render() {
    return (
      <div>
        <div className="home-comp-container">
          <form onSubmit={this.onClickSearch}>
            <div className="search-bar">
              <input
                ref={(searchText) => (this.searchText = searchText)}
                name="searchText"
                type="text"
                placeholder="Search places here...."
              />
            </div>
          </form>
          <div className="search-results-section">
            <span className="search-r-txt-header">
              <i className="fa fa-line-chart fa-icon" aria-hidden="true" />
              Most Explored Places
            </span>
            <div className="searched-place-holder">
              <div className="grid-row ">
                {this.state.featuredPlaces.map((element) => (
                  <ApartmentCardComponent
                    cardLoadReqFrom="R"
                    cardContent={element}
                    key={element._id}
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

export default withRouter(SearchApartmentComponent);
