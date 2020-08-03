/**
 * @author by Souvik Das(Souvik.das@dal.ca)
 * BANNER ID: B00847127
 */
import React, { Component } from "react";
import Footer from "../Footer";
import axios from "axios";
import { APP_URL_CONFIG } from "../../App.Urls";
import "../../css/ContactUs.css";
import { withRouter } from "react-router-dom";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&â€™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

//method for form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === "" && (valid = false);
  });

  return valid;
};

//Class for Contact us component
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      query: "",
      formErrors: {
        firstname: "",
        lastname: "",
        email: "",
        query: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //On Clicking submit button, triggering the backend and calling the contactUs.js file in routes
  handleSubmit(e) {
    e.preventDefault();
    const { f_name, l_name, email, query } = this.state;
    if (formValid(this.state)) {

      let contactInfo = {
        f_name: this.state.firstname,
        l_name: this.state.lastname,
        email: this.state.email,
        query: this.state.query,
      };

      //Method to send a post request by sending all the details fetched by user from front-end to the backend
      axios
        .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.CONTACT_US, contactInfo)
        .then((res) => {});
      this.setState({
        f_name,
        l_name,
        email,
        query,
        formErrors: {
          lastname: "",
          firstname: "",
          email: "",
          query: "",
        },
      });
      alert("You submitted the form.");
      window.location.reload();
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      alert("Form is invalid.");
    }
  }

  //performing on change validations of the form
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.id;

    let formErrors = this.state.formErrors;

    switch (name) {
      case "firstname":
        formErrors.name = value.length < 1 ? "First name can not be empty" : "";
        break;
      case "lastname":
        formErrors.name = value.length < 1 ? "Last name can not be empty" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "query":
        formErrors.name =
          value.length < 10 ? "Query requires minimum 10 characters" : "";
        break;
      default:
        break;
    }

    this.setState({
      formErrors,
      [name]: value,
    });
  }

  //main render method for rendering the component
  render() {
    const { formErrors } = this.state;
    return (
      <>
        <div className="outerform">
          <form
            className="border mt-5 p-4 border-dark text-left"
            onSubmit={this.handleSubmit}
          >
            <h5 className="card-title text-center">
              We would like to hear from you!
            </h5>
            <div className="form-group">
              <label for="firstname">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="John"
                value={this.state.firstname}
                onChange={this.handleChange}
              />
              {formErrors.firstname.length > 0 && (
                <span className="errorMessage">
                  <br />
                  {formErrors.firstname}
                </span>
              )}
            </div>
            <div className="form-group">
              <label for="lastname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Doe"
                value={this.state.lastname}
                onChange={this.handleChange}
              />
              {formErrors.lastname.length > 0 && (
                <span className="errorMessage">
                  <br />
                  {formErrors.lastname}
                </span>
              )}
            </div>
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="johndoe@gmail.com"
                value={this.state.email}
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">
                  <br />
                  {formErrors.email}
                </span>
              )}
            </div>
            <div className="form-group">
              <label for="query">Query</label>
              <textarea
                id="query"
                className="form-control"
                placeholder="Please write your query here..."
                height="170px"
                value={this.state.query}
                onChange={this.handleChange}
              />
              {formErrors.query.length > 0 && (
                <span className="errorMessage">
                  <br />
                  {formErrors.query}
                </span>
              )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="buttonform btn btn-primary mr-5"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="contact-card col-sm-4 text-center">
              <i className="fa fa-map-marker" />
              1333 South Park Street, Halifax, NS
            </div>
            <div className="contact-card col-sm-4 text-center">
              <i className="fa fa-phone" />
              <a href="tel:+19998888881">+1 999 8888881</a>
            </div>
            <div className="contact-card col-sm-4 text-center">
              <i className="fa fa-envelope" />
              <a href="mailto:contact@findadobe.com">contact@findadobe.com</a>
            </div>
          </div>
          <br />
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(ContactUs);
