import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../../css/admin/Admin.scss";
import { APP_URL_CONFIG } from "../../App.Urls";

class EditApartmentComponent extends Component {
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

  onChangeImageData() {
    let tempApartmentDetails = this.state.apartmentDetails;
    tempApartmentDetails["images"] = this.state.updatedData.images.value.split(
      ","
    );
    this.setState({
      apartmentDetails: tempApartmentDetails,
    });
  }

  getApartmentDetailsById = async () => {
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
    if (this.props.location.pathname === "/add-apartment") {
      this.setState({
        apartmentDetails: {
          name: "",
          description: "",
          address: "",
          city: "",
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

  onClickSave = async () => {
    let payloadData = {};
    let keys = Object.keys(this.state.updatedData);
    for (var i = 0; i < keys.length; i++) {
      payloadData[keys[i]] = this.state.updatedData[keys[i]].value;
      if (keys[i] === "amenities" || keys[i] === "images") {
        payloadData[keys[i]] = this.state.updatedData[keys[i]].value.split(",");
      }
    }
    payloadData["_id"] = this.state.apartmentDetails["_id"];
    await axios
      .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.UPDATE_APARTMENT_DETAILS, {
        apartment_info: payloadData,
      })
      .then((res) => {
        alert(res.data["message"]);
      });
  };

  render() {
    return (
      <div>
        {this.state.apartmentDetails != null ? (
          <div className="edit-container">
            <div className="info-block">
              <span className="first-blck">Apartment Name:</span>
              <span className="second-blck">
                <input
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
                  type="text"
                  className="form-control"
                  ref={(address) => (this.state.updatedData.address = address)}
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
              <span className="first-blck">Number of Guests:</span>
              <span className="second-blck">
                <input
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
                <button onClick={this.onClickSave}>Save</button>
              </span>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(EditApartmentComponent);
