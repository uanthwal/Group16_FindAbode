import React, { Component } from 'react'
import Header from './Header';
import Service from './Service';
import ApartmentList from './property_components/ApartmentList';
import Review from './property_components/Review';
import Links from './Links';
import Footer from './Footer';

class Home extends Component {

  render() {
    return (
      <>
        <Header />
        <Service />
        <ApartmentList />
        <Review />
        <Links />
        <Footer />
      </>
    )
  }
}

export default Home;