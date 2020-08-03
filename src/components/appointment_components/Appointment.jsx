import React, { Component } from "react";
import axios from "axios";
import Links from "../../components/Links";
import Footer from "../../components/Footer";
import "../../css/Appointment.css";
import { APP_URL_CONFIG } from "../../App.Urls";

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      apartments: [],
    };
  }

  async componentDidMount() {
    await axios
      .post(
        `${APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.GET_APPOINTMENTS}`, {
          email:`${this.props.match.params.email}`
        }
      )
      .then((res) => {
        this.setState({ appointments: res.data["data"] });
        this.state.appointments.map(async (item) => {
          return await axios
            .post(
              APP_URL_CONFIG.BASE_URL +
                APP_URL_CONFIG.GET_APARTMENT_DETAILS_BY_ID,
              { apartment_id: item.apartmentId }
            )
            .then((res) => {
              this.setState({
                apartments: [...this.state.apartments, res.data["data"]],
              });
            });
        });
      });
  }

  handleCancel = (id) => {
    axios.delete(`${APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.DELETE_APPOINTMENT}${id}`);
    this.props.history.push({
      pathname: "/search-apartment",
    });
  };

  render() {
    return (
      <>
        <div className="apart-main-container">
          {this.state.apartments.length !== 0 ? (
            this.state.apartments.map((item, index) => {
              return (
                <div key={index} className="apart-container">
                  <img
                    src={item.images[0]}
                    className="card-img"
                    alt="aprts showcases"
                  />
                  <div className="search-apart-container">
                    <p className="text-title">{item.name}</p>
                    <p className="text-desc">
                      {this.state.appointments[index].date}
                      <br />
                      <br />
                      {this.state.appointments[index].time}
                    </p>
                    <p className="text-review">
                      {item.price}
                      <span className="text-tiny text-price">
                        {item.rating}
                      </span>
                    </p>
                  </div>
                  <div>
                    <button
                      className="cancle"
                      onClick={() =>
                        this.handleCancel(this.state.appointments[index]._id)
                      }
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="message">You do not have any appointments currently!</h2>
          )}
        </div>
        <Links />
        <Footer />
      </>
    );
  }
}

export default Appointment;
