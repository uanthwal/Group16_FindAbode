import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Home from './pages/Home';
import DetailRoom from './pages/DetailRoom';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Navbar from './components/Navbar';
import UserContextProvider from './contexts/UserContext'

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

            <Route exact path="/search" />
            <Route exact path="/blog" />
            <Route exact path="/favorite" />
            <Route exact path="/about" />
            <Route exact path="/contact" />
            <Route exact path="/faq" />
            <Redirect to="/" />
          </Switch>
        </UserContextProvider>
      </>
    );
  }
}

export default App;