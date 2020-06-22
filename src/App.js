import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUp from './components/login_signup_components/SignUp';
import SignIn from './components/login_signup_components/SignIn';
import Profile from './components/profile_components/Profile';
import Home from './components/Home';
import DetailRoom from './components/property_components/DetailRoom';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Navbar from './components/Navbar';
import UserContextProvider from './contexts/UserContext';
import Search from './components/property_components/SearchLocation';
import SearchResults from './components/property_components/ApartmentSearchResults';

import ContactUs from './components/ContactUs';
import Blogs from './components/Blogs';
import NeedHelp from './components/help_components/NeedHelp';

class App extends Component {
  render() {
    return (
      <>
        <UserContextProvider>
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search/:result" component={DetailRoom} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/profile" component={Profile} />

            <Route exact path="/search" component={Search} />
            <Route exact path="/search-results" component={SearchResults} />
            <Route exact path="/blog" component={Blogs}/>
            <Route exact path="/favorite" />
            <Route exact path="/about" />
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/faq" component={NeedHelp}/>
            <Redirect to="/" />
          </Switch>
        </UserContextProvider>
      </>
    );
  }
}

export default App;
