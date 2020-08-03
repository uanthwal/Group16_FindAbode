import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./components/login_signup_components/SignUp";
import SignIn from "./components/login_signup_components/SignIn";
import Profile from "./components/profile_components/Profile";
import Appointment from "./components/appointment_components/Appointment";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";
import CreateBlog from "./components/CreateBlog";
import "./App.css";
import Navbar from "./components/Navbar";
import UserContextProvider, { UserContext } from "./contexts/UserContext";
import SearchApartment from "./components/property_components/SearchApartment";
import SearchResults from "./components/property_components/ApartmentSearchResults";
import EditBlog from "./components/EditBlog";
import DiscussionForum from "./components/discussion_forum_components/DiscussionForum";
import ViewDiscussion from "./components/discussion_forum_components/ViewDiscussion";
import ContactUs from "./components/information_management/ContactUs";
import Blogs from "./components/Blogs";
import BlogsAdmin from "./components/BlogsAdmin";
import NeedHelp from "./components/information_management/FAQ/NeedHelp";
import AboutUs from "./components/information_management/AboutUs";
import Careers from "./components/career_components/Careers";
import ApartmentDetail from "./components/property_components/ApartmentDetail";
import AdminHomeComponent from "./components/admin_panel_components/AdminHome";
import Apply from "./components/career_components/Apply";
import ApartmentManagementComponent from "./components/admin_panel_components/ApartmentManagement";
import Survey from "./components/survey_form_components/SurveyForm";
import AdminJob from "./components/career_components/AdminJob";
import Rating from "./components/rating_component/Rating";
import Favourites from "./components/favourites_components/Favourites";
import Axios from "axios";

class App extends Component {
  static contextType = UserContext;
  initializeInterceptor() {
    Axios.interceptors.request.use((config) => {
      document.getElementById("loader").className="loaderview";
      return config;
    });
    Axios.interceptors.response.use((config) => {
      document.getElementById("loader").className="";
      return config;
    });
  }
  render() {
    this.initializeInterceptor();
    return (
      <>
        <UserContextProvider>
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search/:result" component={ApartmentDetail} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/appointment/:email" component={Appointment} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/search-apartment" component={SearchApartment} />
            <Route exact path="/search-results" component={SearchResults} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/favourites" component={Favourites} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/faq" component={NeedHelp} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/discussionforum1" component={DiscussionForum} />
            <Route exact path="/survey" component={Survey} />
            <Route
              exact
              path="/discussionforum1/:topic"
              component={ViewDiscussion}
            />
            <Route exact path="/createblog" component={CreateBlog} />
            <Route exact path="/blogadmin" component={BlogsAdmin} />
            <Route exact path="/editblog/:topic" component={EditBlog} />
            <Route exact path="/admin-home" component={AdminHomeComponent} />
            <Route
              exact
              path="/manage-apartment/:id"
              component={ApartmentManagementComponent}
            />
            <Route
              exact
              path="/add-apartment"
              component={ApartmentManagementComponent}
            />
            <Route exact path="/job/apply" component={Apply} />
            <Route exact path="/admin/job" component={AdminJob} />
            <Route exact path="/rating" component={Rating} />
            <Redirect to="/" />
          </Switch>
        </UserContextProvider>
      </>
    );
  }
}

export default App;
