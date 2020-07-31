/**
 * @author Parsad Upendra(upendra@dal.ca)
 * BANNER ID: B00838095
 */

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../../css/search/SearchResults.scss";
import { APP_URL_CONFIG } from "../../App.Urls";
import ApartmentCardComponent from "../../components/property_components/ApartmentCard";

class SearchResultComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBlurBg: false,
      searchResults: [],
      searchText: this.props.location.params,
    };
  }

  getSearchResults = async () => {
    await axios
      .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.SEARCH, {
        search_text: this.state.searchText,
      })
      .then((res) => {
        this.setState({
          searchResults: res.data["data"],
        });
      });
  };

  componentDidMount() {
    let searchTxt = null;
    if (this.state.searchText === undefined) {
      let query = this.props.location.search;
      searchTxt = query !== undefined ? query.split("=")[1] : null;
      if (null === searchTxt || undefined === searchTxt || searchTxt === "") {
        return;
      }
      this.setState({ searchText: searchTxt }, () => {
        this.getSearchResults();
      });
    } else {
      this.getSearchResults();
    }
  }

  render() {
    return (
      <div className="search-r-container">
        <div className="search-r-title">
          Search Results for "{this.state.searchText}""
        </div>
        <div className="grid-row">
          {this.state.searchResults.map((element) => (
            <ApartmentCardComponent
              cardLoadReqFrom="R"
              cardContent={element}
              key={element._id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(SearchResultComponent);
