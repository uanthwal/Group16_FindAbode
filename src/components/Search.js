import React, { Component } from "react";
import "./Search.scss";
import { withRouter } from "react-router-dom";
class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredPlaces: [
        {
          id: "11",
          rating: "4.5",
          name: "5 Private Apartment",
          img: "feature_3.jpg",
          facilities: "3 guests · 1 bedroom · 2 beds · 1 bath",
          price: "85.00",
        },
        {
          id: "22",
          rating: "4.0",
          name: "6 Hotel Cozy Stay - Private",
          img: "feature_2.jpg",
          facilities: "4 guests · 2 bedroom · 2 beds · 2 bath",
          price: "90.00",
        },
        {
          id: "33",
          rating: "3.0",
          name: "7 Student Rooms",
          img: "feature_4.jpg",
          facilities: "3 guests · 2 bedroom · 2 beds · 1 bath",
          price: "95.00",
        },
        {
          id: "44",
          rating: "3.5",
          name: "8 Private Rooms - Private",
          img: "feature_1.jpg",
          facilities: "2 guests · 1 bedroom · 2 beds · 1 bath",
          price: "80.00",
        },
      ],
    };
    this.onClickSearch = this.onClickSearch.bind(this);
    this.onClickExplorePlace = this.onClickExplorePlace.bind(this);
  }

  onClickExplorePlace(e) {
    e.preventDefault();
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
        <div
          onClick={this.onClickBlurBg}
          className={
            this.state.showBlurBg
              ? "home-comp-container blur-bg"
              : "home-comp-container"
          }
        >
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
              <i className="fa fa-line-chart fa-icon" aria-hidden="true"></i>
              Featured Places
            </span>
            <div className="searched-place-holder">
              <div className="grid-row ">
                {this.state.featuredPlaces.map((element) => (
                  <div className="grid-item" key={element.id}>
                    <div className="img-blck">
                      <img
                        alt={element.name}
                        src={'https://r-cf.bstatic.com/images/hotel/max1280x900/168/168547469.jpg'}
                      />
                    </div>
                    <div className="cntnt-blck">
                      <span className="place-name">{element.name}</span>
                      <span className="place-desc">{element.facilities}</span>
                      <span className="place-province">
                        {`PRICE: CAD $${element.price}, RATING ${element.rating}/5`}{" "}
                      </span>
                      <span className="place-book">
                        <button onClick={this.onClickExplorePlace.bind(this)}>
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

export default withRouter(SearchComponent);