import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUp from './components/login_signup_components/SignUp';
import SignIn from './components/login_signup_components/SignIn';
import Profile from './components/profile_components/Profile';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import CreateBlog from './components/CreateBlog';
import './App.css';
import Navbar from './components/Navbar';
import UserContextProvider from './contexts/UserContext';
import SearchApartment from './components/property_components/SearchApartment';
import SearchResults from './components/property_components/ApartmentSearchResults';
import Favourites from './components/Favourites';
import EditBlog from './components/EditBlog';
import DiscussionForum from './components/discussion_forum_components/DiscussionForum'
import ViewDiscussion from './components/discussion_forum_components/ViewDiscussion';
import ContactUs from './components/information_management/ContactUs';
import Blogs from './components/Blogs';
import BlogsAdmin from './components/BlogsAdmin'
import NeedHelp from './components/help_components/NeedHelp';
import AboutUs from "./components/AboutUs";
import Careers from './components/career_components/Careers';
import ApartmentDetail from './components/property_components/ApartmentDetail';
import AdminHomeComponent from './components/admin_panel_components/AdminHome';
import EditApartmentComponent from './components/admin_panel_components/EditApartment';

class App extends Component {
  render() {
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
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/search-apartment" component={SearchApartment} />
            <Route exact path="/search-results" component={SearchResults} />
            <Route exact path="/blog" component={Blogs}/>
            <Route exact path="/favourite" component={Favourites} />
            <Route exact path="/about" component={AboutUs}/>
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/faq" component={NeedHelp}/>
            <Route exact path="/careers" component={Careers}/>
            <Route exact path="/discussionforum1" component={DiscussionForum}/>
            <Route exact path="/discussionforum1/:topic" component={ViewDiscussion}/>
            <Route exact path="/createblog" component={CreateBlog}/>
            <Route exact path="/blogadmin" component={BlogsAdmin}/>
            <Route exact path="/editblog/:topic" component={EditBlog}/>
            <Route exact path="/admin-home" component={AdminHomeComponent}/>
            <Route exact path="/edit-apartment/:id" component={EditApartmentComponent}/>
            <Redirect to="/" />
          </Switch>
        </UserContextProvider>
      </>
    );
  }
}

export default App;
