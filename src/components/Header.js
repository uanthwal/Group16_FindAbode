import React, { Component } from 'react'
import launch from '../images/launch.png'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <section className="header-container">
        <div className="header-text">
          <h1>
            Find the best places to stay quickly
        </h1>
          <span className="square"></span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            veritatis fugit? Eveniet repudiandae rerum esse labore vero repellat
            ut placeat tempora neque? Eius tenetur adipisci ab. Consequuntur a
            explicabo tempora!
        </p>
          <button className="common-btn">
            Read More
        </button>
        </div>
        <img className="launch" src={launch} alt="launch page" />
      </section>
    )
  }
}
export default Header