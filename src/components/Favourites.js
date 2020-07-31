import React, { Component } from "react";

import launch from "../images/launch.png";
import "../css/Favourites.css";
import Links from "./Links";
import Footer from "./Footer";

class Favourites extends Component {
  state = {
    favouriteRooms: [
      {
        id: "1",
        title: "2 BED 2 BATH APARTMENT",
        location: "Miramar Beach, Destin",
        description:
          "Set in Destin in the Florida region, 2 Bed 2 Bath Apartment in Miramar Beach features a patio.",
        price: "$1,900.00 ",
        priceTail: "/ month",
        review: "4/5 stars ",
        reviewTail: "(based on 34 reviews)",
      },
      {
        id: "1",
        title: "2 BED 2 BATH APARTMENT",
        location: "Miramar Beach, Destin",
        description:
          "Set in Destin in the Florida region, 2 Bed 2 Bath Apartment in Miramar Beach features a patio.",
        price: "$1,900.00 ",
        priceTail: "/ month",
        review: "4/5 stars ",
        reviewTail: "(based on 34 reviews)",
      },
      {
        id: "1",
        title: "2 BED 2 BATH APARTMENT",
        location: "Miramar Beach, Destin",
        description:
          "Set in Destin in the Florida region, 2 Bed 2 Bath Apartment in Miramar Beach features a patio.",
        price: "$1,900.00 ",
        priceTail: "/ month",
        review: "4/5 stars ",
        reviewTail: "(based on 34 reviews)",
      },
      {
        id: "1",
        title: "2 BED 2 BATH APARTMENT",
        location: "Miramar Beach, Destin",
        description:
          "Set in Destin in the Florida region, 2 Bed 2 Bath Apartment in Miramar Beach features a patio.",
        price: "$1,900.00 ",
        priceTail: "/ month",
        review: "4/5 stars ",
        reviewTail: "(based on 34 reviews)",
      },
      {
        id: "1",
        title: "2 BED 2 BATH APARTMENT",
        location: "Miramar Beach, Destin",
        description:
          "Set in Destin in the Florida region, 2 Bed 2 Bath Apartment in Miramar Beach features a patio.",
        price: "$1,900.00 ",
        priceTail: "/ month",
        review: "4/5 stars ",
        reviewTail: "(based on 34 reviews)",
      },
    ],
  };
  //Modify the ids of the apartments later when actual content is added
  viewDetail = (e, id) => {
    e.preventDefault();
    this.props.history.push({
      pathname: "/search/" + id,
    });
  };
  render() {
    return (
      <div>
        <div className="outer-container">
          <div className="heading-page">
            <h1>Favourites</h1>
          </div>

          <div className="fav-container">
            {this.state.favouriteRooms.map((item, index) => {
              return (
                <div
                  onClick={(e) => this.viewDetail(e, item.id)}
                  key={index}
                  className="card-container-fav"
                >
                  <img
                    src={launch}
                    className="card-img"
                    alt="aprts showcases"
                  />
                  <div className="text-container">
                    <p className="text-subtitle">{item.location}</p>
                    <p className="text-title">{item.title}</p>
                    <p className="text-desc">
                      {item.desc}
                      <span className="text-tiny">{item.description}</span>
                    </p>
                    <p className="text-tiny">
                      {item.price}
                      <span className="text-tiny">{item.priceTail}</span>
                    </p>
                    <p className="text-review">
                      {item.review}
                      <span className="text-tiny">{item.reviewTail}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Links />
        <Footer />
      </div>
    );
  }
}
export default Favourites;
