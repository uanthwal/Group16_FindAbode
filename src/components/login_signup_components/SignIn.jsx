import React, { Component } from "react";
import {  withRouter } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { APP_URL_CONFIG } from "../../App.Urls";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

/**
 * React Class Component to management user sign in
 * @author Ruize Nie, Parsad Upendra
 */

class SignIn extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);

    this.state = {
      email: undefined,
      password: undefined,
      formError: {
        email: "",
        password: "",
      },
      result: "",
    };
  }

  onChange = (e) => {
    const { name, value } = e.target;
    let formError = this.state.formError;
    switch (name) {
      case "email":
        formError.email = emailRegex.test(value) ? "" : "invalid email address";
        break;
      case "password":
        formError.password =
          value.length < 6 ? "minimum 6 characters required" : "";
        break;
      default:
        break;
    }
    this.setState({ formError, [name]: value });
  };

  formValid = ({ formError, ...rest }) => {
    let valid = true;
    Object.values(formError).forEach((val) => {
      val.length > 0 && (valid = false);
    });
    Object.values(rest).forEach((val) => {
      val === undefined && (valid = false);
    });
    return valid;
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { setUserCredentials } = this.context;
    const { email, password } = this.state;
    let payload = {
      password: password,
      email: email,
    };

    if (this.formValid(this.state)) {
      await axios
        .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.USER_SIGNIN, payload)
        .then((res) => {
          if (res.data.code === 102 || res.data.code === 103) {
            this.setState({
              result: res.data.message,
            });
          } else {
            if (!res.data.data) {
              alert("Something went wrong. Please try again later.");
              return;
            }
            this.setState({
              result: "",
            });
            let userType = res.data.data["userType"];
            let username = res.data.data["username"];
            setUserCredentials(email, userType, username);
            let redirectTo = this.props.location.search;
            redirectTo =
              redirectTo !== undefined ? redirectTo.split("=")[1] : null;
            if (
              null === redirectTo ||
              undefined === redirectTo ||
              redirectTo === ""
            ) {
              if (userType && userType === "A") {
                this.props.history.push({
                  pathname: "/admin-home",
                });
              } else {
                this.props.history.push({
                  pathname: "/",
                });
              }
            } else {
              if (this.isAdminPage(redirectTo)) {
                if (userType && userType === "A") {
                  this.props.history.push({
                    pathname: redirectTo,
                  });
                } else {
                  this.props.history.push({
                    pathname: "/",
                  });
                }
              } else {
                this.props.history.push({
                  pathname: redirectTo,
                });
              }
            }
          }
        });
    } else {
      this.setState({
        result:
          "Please fill out all the entry and make sure you meet all the requirement.",
      });
    }
  };

  isAdminPage(page) {
    let pagesAccessibleToAdmin = [
      "admin-home",
      "blogadmin",
      "createblog",
      "editblog",
      "manage-apartment",
      "add-apartment",
      "/job/apply",
      "/admin/job",
    ];
    return pagesAccessibleToAdmin.indexOf(page) > -1 ? true : false;
  }

  render() {
    const { email, password, result, formError } = this.state;
    return (
      <div className="sign-main-container">
        <section className="sign-side" />
        <section className="sign-content">
          <div className="sign-container">
            <form onSubmit={this.onSubmit} className="sign-form" noValidate>
              <h2>Sign in to FindAbode</h2>
              {result.length > 0 && (
                <span className="error-message">{result}</span>
              )}
              <label htmlFor="email">Email Address</label>
              <input
                className={
                  formError.email.length > 0
                    ? "input-field error"
                    : "input-field"
                }
                type="email"
                name="email"
                id="emial"
                value={email || ""}
                onChange={this.onChange}
                noValidate
              />
              {formError.email.length > 0 && (
                <span className="error-message">{formError.email}</span>
              )}
              <label htmlFor="password">Password</label>
              <input
                className={
                  formError.password.length > 0
                    ? "input-field error"
                    : "input-field"
                }
                type="password"
                name="password"
                id="password"
                placeholder="6+ Characters"
                value={password || ""}
                onChange={this.onChange}
                noValidate
              />
              {formError.password.length > 0 && (
                <span className="error-message">{formError.password}</span>
              )}
              <input className="button" type="submit" value="Login" />
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(SignIn);
