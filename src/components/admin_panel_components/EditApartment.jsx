import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../../css/search/SearchResults.scss";
import { APP_URL_CONFIG } from "../../App.Urls";

class EditApartmentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartmentId: this.props.match.params.id,
      apartmentDetails:null
    };
  }

  getApartmentDetailsById = async () => {
    await axios
      .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.GET_APARTMENT_DETAILS_BY_ID, {
        apartment_id: this.state.apartmentId
      })
      .then((res) => {
        this.setState({
          placesData: res.data["data"],
        });
      });
  };

  componentDidMount() {
    this.getApartmentDetailsById();
  }

  render() {
    return (
      <div>
        {this.state.apartmentDetails != null ? (<></>): null}
      </div>
    );
  }
}

export default withRouter(EditApartmentComponent);
