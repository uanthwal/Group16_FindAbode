import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";
import "../../css/apartment/DetailRoom.scss";
import { APP_URL_CONFIG } from "../../App.Urls";
import Calendar from "react-calendar";
import Modal from "react-modal";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "../../contexts/UserContext";

/**
 * React Class Component to display the detail of apartment
 * @author Ruize Nie
 * @author Souvik
 */
class ApartmentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartmentId: this.props.match.params.result,
      apartmentDetails: null,
      date: new Date(),
      modalIsOpen: false,
      select: "9am - 11am",
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  onDateChange = (date) => this.setState({ date });

  handleBookAppointment = (login) => {
    if (login) {
      this.openModal();
    } else {
      this.props.history.push({
        pathname: "/signin",
        search: "?r=" + window.location.pathname,
      });
    }
  };

  handleSelect = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleTimeSpot = async (e) => {
    e.preventDefault();
    const { date, select, apartmentId } = this.state;
    const email = this.context.userCredentials("email");
    if (date <= new Date()) {
      alert("Can not book the appointment at that date");
    } else {
      await axios.post(
        APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.BOOK_APPOINTMENT,
        {
          email,
          apartmentId,
          date: date.toJSON().slice(0, 10),
          time: select,
        }
      );
      this.closeModal();
    }
  };

  getApartmentDetails = async () => {
    await axios
      .post(
        APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.GET_APARTMENT_DETAILS_BY_ID,
        {
          apartment_id: this.state.apartmentId,
          reqFrom: "APARTMENT_DETAIL",
        }
      )
      .then((res) => {
        if (res.data["rating"] !== null || res.data["rating"] !== "") {
          this.setState({
            apartmentDetails: res.data["data"],
            ratingDetails: res.data["rating"],
          });
        } else {
          this.setState({
            apartmentDetails: res.data["data"],
          });
        }
      });
  };

  componentDidMount() {
    this.getApartmentDetails();
  }

  static contextType = UserContext;

  addToFavourites() {
    if (this.context.isUserLoggedIn()) {
      axios
        .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.ADD_FAVOURITE, {
          email: this.context.userCredentials("email"),
          apartmentId: this.state.apartmentId,
        })
        .then((res) => {
          alert(res.data.message);
        });
    } else {
      this.props.history.push({
        pathname: "/signin",
        search: "?r=" + window.location.pathname,
      });
    }
  }
  render() {
    Modal.setAppElement("#root");
    const login = this.context.isUserLoggedIn();
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%, -50%)",
      },
    };
    return (
      <>
        {this.state.apartmentDetails != null ? (
          <>
            <div className="detailed-view-container">
              <div className="apart-title">
                <h3>{this.state.apartmentDetails.name}</h3>
              </div>
              <div className="property-glance">
                <span className="glance-item">
                  <i className="fas fa-star rating-symbol-position" />
                  <span>{this.state.apartmentDetails.rating}</span>
                </span>
                <span className="glance-item">
                  <i className="fas fa-city" />
                  <span>{this.state.apartmentDetails.city}</span>
                </span>

                <span className="glance-item">
                  <i className="fas fa-mail-bulk" />
                  <span>{this.state.apartmentDetails.postal_code}</span>
                </span>

                <span className="glance-item">
                  <i className="fas fa-address-book" />
                  <span>{this.state.apartmentDetails.city}</span>
                </span>

                <span className="glance-item">
                  <i className="fas fa-city" />
                  <span>{this.state.apartmentDetails.address}</span>
                </span>
              </div>
              <div className="slider-calendar-container">
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
                        return (
                          <div className="carousel-item" key={key}>
                            <img
                              className="d-block w-100 h-100"
                              src={item}
                              alt={`${item}`}
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
                <div className="calender-view">
                  <div className="book-card">
                    <Calendar
                      onChange={this.onDateChange}
                      value={this.state.date}
                    />
                    <button
                      className="book-btn"
                      style={{ outline: "none" }}
                      onClick={() => this.handleBookAppointment(login)}
                    >
                      Book Appointment
                    </button>
                    <Modal
                      isOpen={this.state.modalIsOpen}
                      onRequestClose={this.closeModal}
                      style={customStyles}
                      contentLabel="Example Modal"
                    >
                      <h2>Pick a Time Spot</h2>
                      <form onSubmit={(e) => this.handleTimeSpot(e)}>
                        <select
                          name="select"
                          onChange={this.handleSelect}
                          value={this.state.select}
                        >
                          <option value="9am - 11am">9am - 11am</option>
                          <option value="1pm - 3pm">1pm - 3pm</option>
                          <option value="5pm - 7pm">5pm - 7pm</option>
                        </select>
                        <input
                          className="button"
                          type="submit"
                          value="Confirm"
                        />
                      </form>
                    </Modal>
                  </div>
                </div>
              </div>
              <div className="aprt-highlights">
                <span className="highlight-item">
                  <i className="fas fa-user-friends" />
                  <span>{this.state.apartmentDetails.number_of_guests}</span>
                </span>

                <span className="highlight-item">
                  <i className="fas fa-person-booth" />
                  <span>{this.state.apartmentDetails.number_of_bedroom}</span>
                </span>

                <span className="highlight-item">
                  <i className="fas fa-bed" />
                  <span>{this.state.apartmentDetails.number_of_beds}</span>
                </span>

                <span className="highlight-item">
                  <i className="fas fa-bath" />
                  <span>{this.state.apartmentDetails.number_of_baths}</span>
                </span>
              </div>
              <div className="add-to-fav-view">
                <button style={{ outline: "none" }} onClick={(event) => this.addToFavourites(event)}>
                  Add to Favourites
                </button>
              </div>
              <div className="apart-desc-view">
                <div className="apt-price">
                  <span className="view-title">Price:</span>
                  {this.state.apartmentDetails.price}
                </div>
                <div className="apt-desc">
                  <span className="view-title">Description:</span>
                  {this.state.apartmentDetails.description}
                </div>
              </div>
              <div className="amenities-view">
                <span className="view-title">Amenities:</span>
                <ul>
                  {this.state.apartmentDetails.amenities.map((item, index) => {
                    return (
                      <li key={index}>
                        <i className="fa fa-building-o" aria-hidden="true" />{" "}
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="ratings-view">
                <span className="view-title">Ratings:</span>
                <div className="rating-item">
                  <div className="rating-title">Cleanliness</div>
                  <div className="rating-bar-section">
                    <div className="rating-bar">
                      <span
                        style={{
                          height: "3px",
                          width:
                            (this.state.ratingDetails.cleanliness * 100) / 5 +
                            "%",
                          background: "green",
                          position: "absolute",
                        }}
                      ></span>
                    </div>
                    <div className="rating-value">
                      {this.state.ratingDetails.cleanliness}
                    </div>
                  </div>
                </div>
                <div className="rating-item">
                  <div className="rating-title">Communication</div>
                  <div className="rating-bar-section">
                    <div className="rating-bar">
                      <span
                        style={{
                          height: "3px",
                          width:
                            (this.state.ratingDetails.communication * 100) / 5 +
                            "%",
                          background: "green",
                          position: "absolute",
                        }}
                      ></span>
                    </div>
                    <div className="rating-value">
                      {this.state.ratingDetails.communication}
                    </div>
                  </div>
                </div>
                <div className="rating-item">
                  <div className="rating-title">Accuracy</div>
                  <div className="rating-bar-section">
                    <div className="rating-bar">
                      <span
                        style={{
                          height: "3px",
                          width:
                            (this.state.ratingDetails.accuracy * 100) / 5 + "%",
                          background: "green",
                          position: "absolute",
                        }}
                      ></span>
                    </div>
                    <div className="rating-value">
                      {this.state.ratingDetails.accuracy}
                    </div>
                  </div>
                </div>
                <div className="rating-item">
                  <div className="rating-title">Location</div>
                  <div className="rating-bar-section">
                    <div className="rating-bar">
                      <span
                        style={{
                          height: "3px",
                          width:
                            (this.state.ratingDetails.location * 100) / 5 + "%",
                          background: "green",
                          position: "absolute",
                        }}
                      ></span>
                    </div>
                    <div className="rating-value">
                      {this.state.ratingDetails.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="comments-view">
                <span className="view-title">Comments:</span>
                <ul>
                  {this.state.ratingDetails.comments.map((item, index) => {
                    return (
                      <li key={index}>
                        <i className="far fa-comment" /> {item.comment}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </>
        ) : null}
        <Footer />
      </>
    );
  }
}

export default withRouter(ApartmentDetail);
