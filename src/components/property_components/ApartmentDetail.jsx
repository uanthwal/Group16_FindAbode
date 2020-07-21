import React, { Component } from 'react';

import Links from '../../components/Links';
import Footer from '../../components/Footer';
import launch from '../../images/launch.png';
import ad from '../../images/ad.jpg';
import '../../css/apartment/DetailRoom.css';

const details = {
  name: "single economy",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero cupiditate dignissimos eius porro id obcaecati beatae repellendus? Rerum et maiores voluptates quisquam a reiciendis mollitia ipsa veniam laborum voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero cupiditate dignissimos eius porro id obcaecati beatae repellendus? Rerum et maiores voluptates quisquam a reiciendis mollitia ipsa veniam laborum voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero cupiditate dignissimos eius porro id obcaecati beatae repellendus? Rerum et maiores voluptates quisquam a reiciendis mollitia ipsa veniam laborum voluptatem!",
  extras: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  ],
  price: 100,
  size: 200,
  capacity: 1,
  pets: false,
  breakfast: false
}
class ApartmentDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place_id: this.props.match.params.result
    }
    // TODO: For Souvik, this.state.place_id holds the place id
  }

  render() {
    return (
      <>
        <section className="single-room">
          <div className="book-container">
            <img src={launch} alt="" className="room-images-banner" />
            <div className="book-card">
              <img className="ad-img" src={ad} alt="image not found" />
              <button className="book-btn">Book Appointment</button>
            </div>
          </div>
          {/* <div className="fav-card"> */}
              <button className="fav-btn">Add to Favourites</button>
            {/* </div> */}
          <div className="single-room-info">
            <div className="desc">
              <h3>details</h3>
              <p>{details.description}</p>
            </div>
            <div className="info">
              <h3>info</h3>
              <p>price : ${details.price}</p>
              <p>size : {details.size} SQFT</p>
              <p>
                max capacity : {
                  details.capacity > 1 ? `${details.capacity} people` : `${details.capacity} person`
                }
              </p>
              <p>{details.pets ? 'pets allowed' : 'no pets allowed'}</p>
              <p>{details.breakfast && 'free breakfast included'}</p>
            </div>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {details.extras.map((item, index) => {
              return <li key={index}>- {item}</li>
            })}
          </ul>
        </section>
        <Links />
        <Footer />
      </>
    )
  }
}
export default ApartmentDetail