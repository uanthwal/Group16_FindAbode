import React, { Component } from "react";
import axios from "axios";
import Links from "../../components/Links";
import Footer from "../../components/Footer";
import ad from "../../images/ad.jpg";
import "../../css/apartment/DetailRoom.css";
import { APP_URL_CONFIG } from "../../App.Urls";

class ApartmentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartmentId: this.props.match.params.result,
      apartmentDetails: null,
    };
  }

  getApartmentDetails = async () => {
    await axios
      .post(
        APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.GET_APARTMENT_DETAILS_BY_ID,
        {
          apartment_id: this.state.apartmentId,
        }
      )
      .then((res) => {
        this.setState({
          apartmentDetails: res.data["data"],
        });
      });
  };

  componentDidMount() {
    this.getApartmentDetails();
  }

  render() {
    return (
      <>
        {" "}
        {this.state.apartmentDetails != null ? (
          <>
            <section className="single-room">
              <div className="property-name">
                <h3 tabIndex="-1" className="property-name-details">
                  {this.state.apartmentDetails.name}
                </h3>
                <div className="property-listing-details">
                  <span className="rating">
                    <span className="rating-symbol">
                      <i className="fas fa-star rating-symbol-position" />
                    </span>
                    <span className="rating-symbol-data">
                      <button
                        aria-label="Rated 4.92 out of 5 from 279 reviews."
                        tabIndex="-1"
                        type="button"
                        className="property-rating"
                      >
                        {this.state.apartmentDetails.rating}
                      </button>
                    </span>

                    <span className="property-address-details">
                      <i className="fas fa-city" />{" "}
                      {this.state.apartmentDetails.city}
                    </span>
                    <span className="property-address-details">
                      <i className="fas fa-mail-bulk" />{" "}
                      {this.state.apartmentDetails.postal_code}
                    </span>
                    <span className="property-address-details">
                      <i className="fas fa-address-book" />{" "}
                      {this.state.apartmentDetails.address}
                    </span>
                  </span>
                </div>
              </div>
              <div className="book-container">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    {this.state.apartmentDetails.images.map((item, key) => {
                      return (
                        <li
                          key={key}
                          data-target="#carouselExampleIndicators"
                          data-slide-to={key}
                        />
                      );
                    })}
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={this.state.apartmentDetails.images[0]}
                        alt="Second slide"
                      />
                    </div>
                    {this.state.apartmentDetails.images.map((item, key) => {
                      if (key > 0) {
                        // return (<div className={`carousel-item ${this.checkIfActive(key)}`} key={key}>
                        return (
                          <div className="carousel-item" key={key}>
                            <img
                              className="d-block w-100"
                              src={item}
                              alt={`Image ${key}`}
                              title={`Image ${key}`}
                              data-target="#carouselExampleIndicators"
                              data-slide-to={key}
                            />
                          </div>
                        );
                      }
                    })}
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                <div className="book-card">
                  <img className="ad-img" src={ad} alt="image not found" />
                  <button className="book-btn">Book Appointment</button>
                </div>
              </div>
              <div className="property-name">
                <div className="property-listing-details">
                  <span className="occupancy_list">
                    <span className="occupancy_logos" aria-hidden="true">
                      <i className="fas fa-user-friends" />
                    </span>
                    <span className="guests">
                      {this.state.apartmentDetails.number_of_guests}
                    </span>
                    <span className="occupancy_logos" aria-hidden="true">
                      <i className="fas fa-person-booth" />
                    </span>
                    <span className="bedroom">
                      {this.state.apartmentDetails.number_of_bedroom}
                    </span>
                    <span className="occupancy_logos" aria-hidden="true">
                      <i className="fas fa-bed" />
                    </span>
                    <span className="beds">
                      {this.state.apartmentDetails.number_of_beds}
                    </span>
                    <span className="occupancy_logos" aria-hidden="true">
                      <i className="fas fa-bath" />
                    </span>
                    <span className="baths">
                      {this.state.apartmentDetails.number_of_baths}
                    </span>
                  </span>
                </div>
              </div>
              <button className="fav-btn">Add to Favourites</button>
              <div className="single-room-info">
                <div className="desc">
                  <h3>details</h3>
                  <p>{this.state.apartmentDetails.description}</p>
                </div>
                <div className="info">
                  <h3>info</h3>
                  <p>price : {this.state.apartmentDetails.price}</p>
                </div>
              </div>
            </section>
            <section className="room-extras">
              <h6>Amenities</h6>
              <ul className="amenities">
                {this.state.apartmentDetails.amenities.map((item, index) => {
                  return <li key={index}>- {item}</li>;
                })}
              </ul>
            </section>
          </>
        ) : null}
        <Links />
        <Footer />
      </>
    );
  }
}

export default ApartmentDetail;
