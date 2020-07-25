import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Links from "../../components/Links";
import Footer from "../../components/Footer";
import "../../css/apartment/DetailRoom.css";
import { APP_URL_CONFIG } from "../../App.Urls";
import Calendar from "react-calendar";
import Modal from "react-modal";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "../../contexts/UserContext";

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
    const { email } = this.context;
    if (date <= new Date()) {
      alert("Can not book the appointment at that date");
    } else {
      await axios.post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.APPOINTMENT, {
        email,
        apartmentId,
        date: date.toJSON().slice(0, 10),
        time: select,
      });
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
        this.setState({
          apartmentDetails: res.data["data"],
        });
      });
  };

  componentDidMount() {
    this.getApartmentDetails();
  }

  static contextType = UserContext;

  render() {
    Modal.setAppElement("#root");
    const { login } = this.context;
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
                              className="d-block w-100 h-100"
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
                  <Calendar
                    onChange={this.onDateChange}
                    value={this.state.date}
                  />
                  <button
                    className="book-btn"
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
                      <input className="button" type="submit" value="Confirm" />
                    </form>
                  </Modal>
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

export default withRouter(ApartmentDetail);
