import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../../css/search/SearchResults.scss";
import { APP_URL_CONFIG } from "../../App.Urls";

class AdminHomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBlurBg: false,
      placesData: [],
      searchText: this.props.location.params,
    };
    this.onClickExplorePlace = this.onClickExplorePlace.bind(this);
    this.onClickDeleteIcon = this.onClickDeleteIcon.bind(this);
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

  onClickDeleteIcon = async (id) => {
    await axios
      .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.DELETE_APARTMENT, {place_id:id})
      .then((res) => {
        this.getAllPlaces();
      });
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
                  <div className="grid-item" key={element._id}>
                    <div className="delete-icon"  onClick={this.onClickDeleteIcon.bind(
                            this,
                            element._id
                          )}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                    </div>
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

export default withRouter(AdminHomeComponent);
