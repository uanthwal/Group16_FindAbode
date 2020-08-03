/**
 * @author Parsad Upendra(upendra@dal.ca)
 * BANNER ID: B00838095
 */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import "../css/navbar/Navbar.scss";

class Navbar extends Component {
  static contextType = UserContext;
  render() {
    const isUserLoggedIn = this.context.isUserLoggedIn();
    const userType = this.context.userCredentials("uType");
    const email = this.context.userCredentials("email");
    return (
      <nav className="navbar navbar-expand-md">
        <Link
          className="navbar-brand link"
          to={userType === "A" ? "/admin-home" : "/"}
        >
          <h1 className="nav-logo"> FindAbode</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            {userType === "R" || userType === null ? (
              <>
                <li className="nav-item">
                  <Link className="link" to="/search-apartment">
                    Search
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="link" to="/blogs">
                    Blogs
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/careers">
                    Careers
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/survey">
                    Survey
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/faq">
                    FAQ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/discussionforum1">
                    Discussion forum
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="link" to="/add-apartment">
                    Add New Apartment
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="link" to="/blogadmin">
                    Manage Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/admin/job">
                    Jobs
                  </Link>
                </li>
              </>
            )}

            {!isUserLoggedIn && (
              <li>
                <Link className="link" to="/signin">
                  Sign In
                </Link>
              </li>
            )}
            {!isUserLoggedIn ? (
              <Link className="link sign-up" to="/signup">
                <button style={{ outline: "none" }}>Sign Up</button>
              </Link>
            ) : (
              <>
                {userType === "R" ? (
                  <li className="nav-item">
                    <Link className="link" to={`/appointment/${email}`}>
                      Appointment
                    </Link>
                  </li>
                ) : null}
                <li className="nav-item">
                      <Link className="link" to={`/favourites`}>
                        Favourites
                    </Link>
                    </li>
                <Link className="link sign-up" to="/profile">
                  <button style={{ outline: "none" }}>Profile</button>
                </Link>
              </>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
