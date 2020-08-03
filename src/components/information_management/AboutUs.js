/**
 * @author by Souvik Das(Souvik.das@dal.ca)
 * BANNER ID: B00847127
 */
import React, { Component } from "react";
import AboutUsImg from "../../images/AboutUs.jpg";
import Footer from "../Footer";

//Class for AboutUs component
class AboutUs extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "ThreeDHighlight" }}>
        <h2 className="text-center mt-5 p-4 mx-auto">About Us</h2>
        <div
          className="card bg-light mt-5 p-4 border-dark mx-auto"
          style={{ width: "80%" }}
        >
          <img
            className="card-img-top mx-auto rounded d-block"
            src={AboutUsImg}
            style={{ width: "90%" }}
            alt={AboutUsImg}
          />
          <div className="card-body">
            <h2 className="card-title text-center">
              <span
                style={{
                  backgroundColor: "turquoise",
                  textDecorationStyle: "wavy",
                  color: "AppWorkspace",
                  fontWeight: "bold",
                }}
              >
                Our Team!
              </span>
            </h2>
            <p
              className="card-text text-justify "
              style={{ color: "brown", fontWeight: "italic" }}
            >
              Our home-solutions firm, FindAbode, was established in Halifax by
              team members of 6 people, namely Ruize Nie, Simranbanu, Parsad
              Upendra, Ruminder Singh, Prerna Jain, and Souvik Das in May 2020.
              All six founders had experienced a common problem – finding an
              abode in the new city. People looking for housing and have limited
              time in their busy schedules to visit every apartment one by one
              personally face difficulties in finding a perfect home.
            </p>
            <p
              className="card-text text-justify "
              style={{ color: "brown", fontWeight: "italic" }}
            >
              Furthermore, numerous immigrants did not know how to get around
              with locals; therefore, they lack access to local insights into a
              new town. We gathered information that people leaving homes to
              relocate to different cities required more than just a residence.
              They are looking for a place that they could call home, a decent
              neighborhood, and a platform that allows them to stay connected to
              various important access points.
            </p>
          </div>
          <br />
          <div className="card-body">
            <h2 className="card-title text-center">
              <span
                style={{
                  backgroundColor: "turquoise",
                  textDecorationStyle: "wavy",
                  color: "AppWorkspace",
                  fontWeight: "bold",
                }}
              >
                For owners:- Benefits of listing your beautiful property with
                our FindAbode?
              </span>
            </h2>
            <p
              className="card-text text-justify "
              style={{ color: "brown", fontWeight: "italic" }}
            >
              1. FindAbode is becoming a remarkable place to list and book
              accommodation effortlessly, across Halifax and other regions of
              Canada.
            </p>
            <p
              className="card-text text-justify "
              style={{ color: "brown", fontWeight: "italic" }}
            >
              2. Join our FindAbode family for quality and affordable services
              by FindAbode platforms.
            </p>
            <p
              className="card-text text-justify "
              style={{ color: "brown", fontWeight: "italic" }}
            >
              3. You can also feature your property listing starting from CA20$
              a month.
            </p>
            <p
              className="card-text text-justify "
              style={{ color: "brown", fontWeight: "italic" }}
            >
              4. FindAbode is considered to be the future of Vacation/Rental
              property management service platforms.
            </p>
            <p
              className="card-text text-justify "
              style={{ color: "brown", fontWeight: "italic" }}
            >
              5. FindAbode provides owners with ZERO commission on listings,
              quite simple upload process and the choice to list property on
              their own terms! You can even list your property stand out from
              other listings for just $15 per month.
            </p>
          </div>
          <br />
          <div className="card-body">
            <h2 className="card-title text-center">
              <span
                style={{
                  backgroundColor: "turquoise",
                  textDecorationStyle: "wavy",
                  color: "AppWorkspace",
                  fontWeight: "bold",
                }}
              >
                For guests:- Why should you choose FindAbode?
              </span>
            </h2>
            <p
              className="card-text text-justify "
              style={{ color: "brown", fontWeight: "italic" }}
            >
              FindAbode is founded by us to meet the accommodation needs of
              people who are relatively new to a city or are looking for a
              temporary stay. We have realised how difficult these process can
              be for finding accommodation if you are a busy person.
            </p>
            <p
              className="card-text text-justify "
              style={{ color: "brown", fontWeight: "italic" }}
            >
              We provide our guests with accommodation at a greater value. The
              listings will fulfill the needs of every guest's desire, budget
              and styling options.
            </p>
            <p
              className="card-text text-justify "
              style={{ color: "brown", fontWeight: "italic" }}
            >
              When booking holiday accommodation, guests are often charged
              hidden fees, which significantly hike up the price of the booking.
              At FindAbode, there are no hidden fees, with every booking you
              will be charged a transparent fee of as little as 5%.
            </p>
            <p
              className="card-text text-justify "
              style={{ color: "brown", fontWeight: "italic" }}
            >
              FindAbode is a user friendly website, which provides secure and
              reliability to our valued customers. Our website is constantly
              modified for seamless experience.
            </p>
            <p
              className="card-text text-justify "
              style={{ color: "brown", fontWeight: "italic" }}
            >
              Discover you own abode and start saving your valuable time and
              money with FindAbode. Happy booking!
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
