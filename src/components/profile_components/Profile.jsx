import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import Links from "../../components/Links";
import Footer from "../../components/Footer";
import "../../css/Profile.css";
import { APP_URL_CONFIG } from "../../App.Urls";

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
    const { data } = await axios.get(
      APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.SIGNUP + email
    );
    this.setState({ detail: data[0] });
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
      this.setState({
        result: "Update Successful!",
        green: true,
      });
      const user = { username, password };
      await axios.post(
        APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.SIGNUP + email,
        user
      );
    } else {
      this.setState({
        result:
          "Please fill out all the entry and make sure you meet all the requirement",
        green: false,
      });
    }
  };

  onDelete = async () => {
    const email = this.context.userCredentials("email");
    await axios
      .delete(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.SIGNUP + email)
      .then((res) => {
        alert(res["data"["message"]]);
        this.context.logoutUser();
        this.props.history.push("/");
      });
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
              <label htmlFor="email">Account</label>
              <input
                className="input-field"
                type="email"
                name="email"
                id="email"
                value={detail.email}
                readOnly
              />
              <label htmlFor="username">Enter New Username</label>
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
              <label htmlFor="password">Enter New Password</label>
              <input
                className={
                  formError.password.length > 0
                    ? "input-field error"
                    : "input-field"
                }
                type="password"
                name="password"
                id="password"
                placeholder={detail.password}
                value={password || ""}
                onChange={this.onChange}
                noValidate
              />
              {formError.password.length > 0 && (
                <span className="error-message">{formError.password}</span>
              )}
              <div className="update-container">
                <input className="button update" type="submit" value="Update" />
              </div>
            </form>
          </div>
          <div className="profile-primary-btn">
            <Link
              onClick={this.onLogout}
              className="logout link sign-up"
              to="/"
            >
              <button>Logout Account</button>
            </Link>
            <Link onClick={this.onDelete} to="/" className="link sign-up">
              <button>Delete Account</button>
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
