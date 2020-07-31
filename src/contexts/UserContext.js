import React, { createContext, Component } from "react";

export const UserContext = createContext();

class UserContextProvider extends Component {
  state = {
    isUserLoggedIn: false,
  };

  setUserCredentials = (email, userType, username) => {
    localStorage.setItem("email", email);
    localStorage.setItem("userType", userType);
    localStorage.setItem("username", username);
    this.setState({ isUserLoggedIn: this.isUserLoggedIn() });
  };

  logoutUser = () => {
    localStorage.clear();
    this.setState({ isUserLoggedIn: this.isUserLoggedIn() });
  };

  userCredentials(type) {
    let uType = localStorage.getItem("userType");
    let email = localStorage.getItem("email");
    let username = localStorage.getItem("username");
    if (type === "email") return email;
    if (type === "uType") return uType;
    if (type === "username") return username;
  }

  isUserLoggedIn() {
    let uType = localStorage.getItem("userType");
    let email = localStorage.getItem("email");
    if (
      email !== null &&
      email !== "" &&
      uType !== null &&
      (uType === "A" || uType === "R")
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          setUserCredentials: this.setUserCredentials,
          userCredentials: this.userCredentials,
          isUserLoggedIn: this.isUserLoggedIn,
          logoutUser: this.logoutUser,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserContextProvider;
