import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../../css/search/SearchResults.scss";
import { APP_URL_CONFIG } from "../../App.Urls";

class SearchResultComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBlurBg: false,
      searchResults: [],
      searchText: this.props.location.params,
    };
    this.onClickExplorePlace = this.onClickExplorePlace.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
    this.onSortOptionSelectedHandler = this.onSortOptionSelectedHandler.bind(
      this
    );
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

  onClickExplorePlace(id) {
    this.props.history.push({
      pathname: "/search/" + id,
    });
  }

  onSortOptionSelectedHandler(option) {
    console.log("onSortOptionSelectedHandler", option);
  }

  render() {
    return (
      <div>
        <div className="search-r-container">
          <div></div>
          <div className="search-results-section">
            <span className="search-r-txt-header">
              Search Results({this.state.searchResults.length})
            </span>
            <div className="searched-place-holder">
              <div className="grid-row ">
                {this.state.searchResults.map((element) => (
                  <div className="grid-item" key={element._id}>
                    <div className="img-blck">
                      <img alt={element.name} src={element.images[0]} />
                    </div>
                    <div className="cntnt-blck">
                      <span className="place-name">{element.name}</span>
                      <span className="place-desc">
                        {element.number_of_guests} · {element.number_of_bedroom}{" "}
                        · {element.number_of_beds} · {element.number_of_baths}
                      </span>
                      <span className="place-province">
                        {`PRICE: CAD ${element.price}`}
                      </span>
                      <span className="place-province">
                        RATING: {element.rating}
                      </span>
                      <span className="place-book">
                        <button
                          onClick={this.onClickExplorePlace.bind(
                            this,
                            element._id
                          )}
                        >
                          EXPLORE
                        </button>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchResultComponent);
