import React, { Component } from "react";
import "./SearchResults.scss";
import { withRouter } from "react-router-dom";

class SearchResultComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBlurBg: false,
      searchResults: [],
      searchText: this.props.location.params,
    };
    this.mockData = [
      {
        id: "1",
        rating: "3.5",
        name: "1 Hotel Medows",
        img: "feature_1.jpg",
        facilities: "3 guests · 1 bedroom · 2 beds · 1 bath",
        price: "110.00",
      },
      {
        id: "2",
        rating: "4.5",
        name: "2 Hotel Nightstay",
        img: "feature_2.jpg",
        facilities: "3 guests · 1 bedroom · 2 beds · 1 bath",
        price: "90.00",
      },
      {
        id: "3",
        rating: "3.0",
        name: "3 Edward Cottage",
        img: "feature_3.jpg",
        facilities: "3 guests · 1 bedroom · 2 beds · 1 bath",
        price: "89.00",
      },
      {
        id: "4",
        rating: "3.5",
        name: "4 Private Rooms",
        img: "feature_4.jpg",
        facilities: "3 guests · 1 bedroom · 2 beds · 1 bath",
        price: "69.00",
      },

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
        price: "80.00",
      },
      {
        id: "44",
        rating: "3.5",
        name: "8 Private Rooms - Private",
        img: "feature_4.jpg",
        facilities: "2 guests · 1 bedroom · 2 beds · 1 bath",
        price: "99.00",
      },

      {
        id: "101",
        rating: "4.5",
        name: "9 Private Apartment",
        img: "feature_2.jpg",
        facilities: "4 guests · 2 bedroom · 2 beds · 1.5 bath",
        price: "86.00",
      },
      {
        id: "212",
        rating: "3.0",
        name: "10 Hotel Cozy Stay - Private",
        img: "feature_1.jpg",
        facilities: "5 guests · 2 bedroom · 2 beds · 1 bath",
        price: "75.00",
      },
      {
        id: "133",
        rating: "2.5",
        name: "11 Student Rooms",
        img: "feature_3.jpg",
        facilities: "3 guests · 1 bedroom · 2 beds · 1.5 bath",
        price: "100.00",
      },
      {
        id: "441",
        rating: "4.0",
        name: "12 Private Rooms - Private",
        img: "feature_1.jpg",
        facilities: "3 guests · 1 bedroom · 2 beds · 1 bath",
        price: "90.00",
      },

      {
        id: "119",
        rating: "4.5",
        name: "13 Private Apartment",
        img: "feature_2.jpg",
        facilities: "1 guests · 1 bedroom · 1 beds · 1 bath",
        price: "70.00",
      },
      {
        id: "232",
        rating: "3.5",
        name: "14 Hotel Cozy Stay - Private",
        img: "feature_4.jpg",
        facilities: "3 guests · 1 bedroom · 2 beds · 1 bath",
        price: "102.00",
      },
      {
        id: "313",
        rating: "2.5",
        name: "15 Student Rooms",
        img: "feature_3.jpg",
        facilities: "2 guests · 2 bedroom · 2 beds · 2 bath",
        price: "67.00",
      },
      {
        id: "424",
        rating: "3.0",
        name: "16 Private Rooms - Private",
        img: "feature_1.jpg",
        facilities: "3 guests · 2 bedroom · 2 beds · 1 bath",
        price: "44.00",
      },
    ];
    this.onClickExplorePlace = this.onClickExplorePlace.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
    this.onSortOptionSelectedHandler = this.onSortOptionSelectedHandler.bind(
      this
    );
  }

  getSearchResults() {
    // TODO: Make an API request here to get the data for searched text
    let tempResults = [];
    let searchTxt = this.state.searchText;
    searchTxt = searchTxt.toLowerCase();
    debugger;
    for (let i = 0; i < this.mockData.length; i++) {
      if (this.mockData[i].name.toLowerCase().indexOf(searchTxt) !== -1) {
        tempResults.push(this.mockData[i]);
      }
    }
    this.setState({
      searchResults: tempResults,
    });
  }

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

  onClickExplorePlace() {
    alert("//TODO: Explore shows the Place details");
  }

  onSortOptionSelectedHandler(option) {
    console.log("onSortOptionSelectedHandler", option);
  }

  render() {
    return (
      <div>
        <div className="search-r-container">
          <div>
            {/* <SortAndFilterComponent
              onSortOptionSelected={this.onSortOptionSelectedHandler}
            /> */}
          </div>
          <div className="search-results-section">
            <span className="search-r-txt-header">
              Search Results({this.state.searchResults.length})
            </span>
            <div className="searched-place-holder">
              <div className="grid-row ">
                {this.state.searchResults.map((element) => (
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

export default withRouter(SearchResultComponent);
