import React, { Component } from "react";
import Header from "./Header";
import Service from "./Service";
import ApartmentCitiesComponent from "./property_components/ApartmentCities";
import Review from "./property_components/Review";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Service />
        <ApartmentCitiesComponent />
        <Review />
        <Footer />
      </>
    );
  }
}

export default Home;
