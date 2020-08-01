/**
 * @author Parsad Upendra(upendra@dal.ca)
 * BANNER ID: B00838095
 */

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../../css/admin/Admin.scss";
import { APP_URL_CONFIG } from "../../App.Urls";
import { UserContext } from "../../contexts/UserContext";

class ApartmentManagementComponent extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      apartmentId: this.props.match.params.id,
      apartmentDetails: null,
      updatedData: {},
    };
    this.onClickSave = this.onClickSave.bind(this);
    this.onChangeImageData = this.onChangeImageData.bind(this);
  }

  // This method is for the preview of the image URL entered by the user
  onChangeImageData() {
    let tempApartmentDetails = this.state.apartmentDetails;
    tempApartmentDetails["images"] = this.state.updatedData.images.value.split(
      ","
    );
    this.setState({
      apartmentDetails: tempApartmentDetails,
    });
  }

  /**
   * Method to fetch the apartment details by an id
   * variable @reqFrom is used to identify if the apartment details are fetched by the admin
   * or an end-user clicked on EXPLORE button to fetch the apartment details
   */

  getApartmentDetailsById = async () => {
    await axios
      .post(
        APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.GET_APARTMENT_DETAILS_BY_ID,
        {
          apartment_id: this.state.apartmentId,
          reqFrom: "EDIT_APARTMENT",
        }
      )
      .then((res) => {
        this.setState({
          apartmentDetails: res.data["data"],
        });
      });
  };

  componentDidMount() {
    if (!this.context.isUserLoggedIn()) {
      this.props.history.push({
        pathname: "/signin/",
        search: "?r=admin-home",
      });
      return;
    }
    if (this.props.location.pathname === "/add-apartment") {
      this.setState({
        apartmentDetails: {
          name: "",
          description: "",
          address: "",
          city: "",
          price: "",
          postal_code: "",
          number_of_guests: "",
          number_of_bedroom: "",
          number_of_baths: "",
          amenities: [],
          images: [],
        },
      });
    } else {
      this.getApartmentDetailsById();
    }
  }

  onClickSave = async (e) => {
    e.preventDefault();
    let payloadData = {};
    let keys = Object.keys(this.state.updatedData);
    for (var i = 0; i < keys.length; i++) {
      payloadData[keys[i]] = this.state.updatedData[keys[i]].value;
      if (keys[i] === "amenities" || keys[i] === "images") {
        payloadData[keys[i]] = this.state.updatedData[keys[i]].value.split(",");
      }
    }
    let url = "";
    if (this.props.location.pathname === "/add-apartment") {
      url = APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.ADD_APARTMENT;
    } else {
      payloadData["_id"] = this.state.apartmentDetails["_id"];
      url = APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.UPDATE_APARTMENT_DETAILS;
    }
    await axios
      .post(url, {
        apartment_info: payloadData,
      })
      .then((res) => {
        alert(res.data["message"]);
        this.props.history.push({
          pathname: "/admin-home",
        });
      });
  };

  render() {
    return (
      <div>
        {this.state.apartmentDetails != null ? (
          <div className="edit-container">
            <form onSubmit={this.onClickSave}>
              <div className="info-block">
                <span className="first-blck">Apartment Name:</span>
                <span className="second-blck">
                  <input
                    placeholder="Meadows Stay"
                    type="text"
                    className="form-control"
                    ref={(name) => (this.state.updatedData.name = name)}
                    name="name"
                    defaultValue={this.state.apartmentDetails.name}
                    required
                  />
                </span>
              </div>
              <div className="info-block">
                <span className="first-blck">Apartment Description:</span>
                <span className="second-blck">
                  <textarea
                    placeholder="Apartment Description goes here"
                    className="form-control"
                    ref={(description) =>
                      (this.state.updatedData.description = description)
                    }
                    name="description"
                    defaultValue={this.state.apartmentDetails.description}
                    required
                  />
                </span>
              </div>
              <div className="info-block">
                <span className="first-blck">Apartment Address:</span>
                <span className="second-blck">
                  <input
                    placeholder="Queen St, Toronto, Ontario"
                    type="text"
                    className="form-control"
                    ref={(address) =>
                      (this.state.updatedData.address = address)
                    }
                    name="address"
                    defaultValue={this.state.apartmentDetails.address}
                    required
                  />
                </span>
              </div>
              <div className="info-block">
                <span className="first-blck">Apartment City:</span>
                <span className="second-blck">
                  <input
                    placeholder="Toronto"
                    type="text"
                    className="form-control"
                    ref={(city) => (this.state.updatedData.city = city)}
                    name="city"
                    defaultValue={this.state.apartmentDetails.city}
                    required
                  />
                </span>
              </div>
              <div className="info-block">
                <span className="first-blck">Postal Code:</span>
                <span className="second-blck">
                  <input
                    placeholder="B3J2K9"
                    type="text"
                    className="form-control"
                    ref={(postal_code) =>
                      (this.state.updatedData.postal_code = postal_code)
                    }
                    name="postal_code"
                    defaultValue={this.state.apartmentDetails.postal_code}
                    required
                  />
                </span>
              </div>
              <div className="info-block">
                <span className="first-blck">Price:</span>
                <span className="second-blck">
                  <input
                    type="text"
                    placeholder="$99/night"
                    className="form-control"
                    ref={(price) => (this.state.updatedData.price = price)}
                    name="price"
                    defaultValue={this.state.apartmentDetails.price}
                    required
                  />
                </span>
              </div>
              <div className="info-block">
                <span className="first-blck">Number of Guests:</span>
                <span className="second-blck">
                  <input
                    placeholder="4 guests"
                    type="text"
                    className="form-control"
                    ref={(number_of_guests) =>
                      (this.state.updatedData.number_of_guests = number_of_guests)
                    }
                    name="number_of_guests"
                    defaultValue={this.state.apartmentDetails.number_of_guests}
                    required
                  />
                </span>
              </div>
              <div className="info-block">
                <span className="first-blck">Number of Bedrooms:</span>
                <span className="second-blck">
                  <input
                    placeholder="2 bedrooms"
                    type="text"
                    className="form-control"
                    ref={(number_of_bedroom) =>
                      (this.state.updatedData.number_of_bedroom = number_of_bedroom)
                    }
                    name="number_of_bedroom"
                    defaultValue={this.state.apartmentDetails.number_of_bedroom}
                    required
                  />
                </span>
              </div>
              <div className="info-block">
                <span className="first-blck">Number of Beds:</span>
                <span className="second-blck">
                  <input
                    placeholder="2 beds"
                    type="text"
                    className="form-control"
                    ref={(number_of_beds) =>
                      (this.state.updatedData.number_of_beds = number_of_beds)
                    }
                    name="number_of_beds"
                    defaultValue={this.state.apartmentDetails.number_of_beds}
                    required
                  />
                </span>
              </div>

              <div className="info-block">
                <span className="first-blck">Number of Bath:</span>
                <span className="second-blck">
                  <input
                    placeholder="2 baths"
                    type="text"
                    className="form-control"
                    ref={(number_of_baths) =>
                      (this.state.updatedData.number_of_baths = number_of_baths)
                    }
                    name="number_of_baths"
                    defaultValue={this.state.apartmentDetails.number_of_baths}
                    required
                  />
                </span>
              </div>
              <div className="info-block">
                <span className="first-blck">Amenities:</span>
                <span className="second-blck">
                  <textarea
                    placeholder="Gym,Pool,Parking"
                    className="form-control"
                    ref={(amenities) =>
                      (this.state.updatedData.amenities = amenities)
                    }
                    name="amenities"
                    defaultValue={this.state.apartmentDetails.amenities}
                    required
                  />
                </span>
              </div>
              <div className="info-block">
                <span className="first-blck">Images:</span>
                <span className="second-blck">
                  <textarea
                    placeholder="Enter URLs separated by comma. Example: https://a0.muscache.com/im/pictures/129d7010-887e-4efd-acf1-bd266d44ead2.jpg?im_w=720,https://a0.muscache.com/im/pictures/30da39ab-67f1-407f-aedb-a84f7bf26809.jpg?im_w=720"
                    className="form-control"
                    ref={(images) => (this.state.updatedData.images = images)}
                    name="images"
                    defaultValue={this.state.apartmentDetails.images}
                    required
                    onChange={this.onChangeImageData}
                  />
                  <span>
                    {this.state.apartmentDetails["images"].map((url, index) => (
                      <img
                        key={index}
                        className="img-display"
                        src={url}
                        alt={url}
                      />
                    ))}
                  </span>
                </span>
              </div>
              <div className="info-block">
                <span className="first-blck  cntnt-center">
                  <button type="submit">Save</button>
                </span>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(ApartmentManagementComponent);
