import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import Links from "../../components/Links";
import Footer from "../../components/Footer";
import "../../css/Profile.css";
import { APP_URL_CONFIG } from "../../App.Urls";

/**
 * React Class Component to management user profile
 * @author Ruize Nie
 */
class Profile extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
      username: undefined,
      password: undefined,
      formError: {
        username: "",
        password: "",
      },
      result: "",
      green: false,
    };
  }

  async componentDidMount() {
    if (!this.context.isUserLoggedIn()) {
      this.props.history.push({
        pathname: "/signin/",
      });
      return;
    }
    const email = this.context.userCredentials("email");
    await axios
      .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.GET_USER_INFO, {
        email: email,
      })
      .then((res) => {
        if (!res.data || res.data.code === 104) {
          this.props.history.push({
            pathname: "/signin/",
          });
          return;
        } else {
          this.setState({ detail: res.data.data });
        }
      });
  }

  onChange = (e) => {
    const { name, value } = e.target;
    let formError = this.state.formError;
    switch (name) {
      case "username":
        formError.username =
          value.length < 3 ? "minimum 3 characters required" : "";
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

  onUpdate = async (e, email, username, password) => {
    e.preventDefault();
    if (this.formValid(this.state)) {
      const user = { username, password };
      let payload = {
        email: email,
        username: user.username,
        password: user.password,
      };
      await axios
        .post(
          APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.UPDATE_USER_INFO,
          payload
        )
        .then((res) => {
          this.setState({
            result: res.data.message,
            green: true,
          });
        });
    } else {
      this.setState({
        result: "Please enter the new user name or password!",
        green: false,
      });
    }
  };

  onDelete = async () => {
    const email = this.context.userCredentials("email");
    await axios
      .delete(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.DELETE_USER + email)
      .then((res) => {
        alert(res.data.message);
        this.context.logoutUser();
        this.props.history.push("/");
      });
  };

  formValid = ({ formError, ...rest }) => {
    this.setState({
      result: "",
      green: false,
    });
    if (
      (rest.username === "" ||
        rest.username === null ||
        rest.username === undefined) &&
      (rest.password === "" ||
        rest.password === null ||
        rest.password === undefined)
    ) {
      return false;
    }
    return true;
    // let valid = true;
    // Object.values(formError).forEach((val) => {

    // });
    // Object.values(rest).forEach((val) => {
    //   val === undefined && (valid = false);
    // });
    // return valid;
  };

  onLogout = () => {
    this.context.logoutUser();
  };

  render() {
    const { username, password, result, formError, green } = this.state;
    const { detail } = this.state;
    return (
      <div>
        <div className="profile-container">
          <div className="profile-card">
            <form
              onSubmit={(e) =>
                this.onUpdate(e, detail.email, username, password)
              }
              className="sign-form"
              noValidate
            >
              <h2 className="profile-title">User Profile</h2>
              {result.length > 0 && (
                <span className={green ? "success-message" : "error-message"}>
                  {result}
                </span>
              )}
              <label htmlFor="email">Email</label>
              <input
                className="input-field"
                type="email"
                name="email"
                id="email"
                value={detail.email}
                readOnly
              />
              <label htmlFor="username">Name</label>
              <input
                className={
                  formError.username.length > 0
                    ? "input-field error"
                    : "input-field"
                }
                type="text"
                name="username"
                id="username"
                placeholder={detail.username}
                value={username || ""}
                onChange={this.onChange}
                noValidate
              />
              {formError.username.length > 0 && (
                <span className="error-message">{formError.username}</span>
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
                placeholder="********"
                value={password || ""}
                onChange={this.onChange}
                noValidate
              />
              {formError.password.length > 0 && (
                <span className="error-message">{formError.password}</span>
              )}
              <div className="update-container">
                <input className="button update" style={{ outline: "none" }} type="submit" value="Update" />
              </div>
            </form>
          </div>
          <div className="profile-primary-btn">
            <Link
              onClick={this.onLogout}
              className="logout link sign-up"
              to="/"
            >
              <button style={{ outline: "none" }}>Logout Account</button>
            </Link>
            <Link onClick={this.onDelete} to="/" className="link sign-up">
              <button style={{ outline: "none" }}>Delete Account</button>
            </Link>
          </div>
        </div>
        <Links />
        <Footer />
      </div>
    );
  }
}

export default Profile;
