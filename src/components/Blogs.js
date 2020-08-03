//Author: Simranbanu Roshansha Diwan (B00833562)
import React, { Component } from "react";
import { APP_URL_CONFIG } from "../App.Urls";
import axios from "axios";
import blogimg from "../images/landingpage_sub.jpg";
import Footer from "./Footer";

//resuable blogs component which is iterated as per number of blogs while rendering
const Blog = (props) => (
  <div>
    <div className="card bg-light border-dark mx-auto" style={{ width: "80%" }}>
      <img
        className="card-img-top mx-auto rounded d-block"
        src={blogimg}
        style={{ width: "70%" }}
        alt="profile image"
      />
      <div className="card-body">
        <h2 className="card-title text-center">
          <kbd>{props.blog.topic}</kbd>
        </h2>
        <p className="card-text text-justify ">{props.blog.p1}</p>
        <p className="card-text text-justify ">{props.blog.p2}</p>
      </div>
    </div>
    <br />
  </div>
);

//Class for blogs component
class Blogs extends Component {
  constructor(props) {
    super(props);
    this.blogList = this.blogList.bind(this);
    this.state = {
      blogs: [],
    };
  }

  //fetching data before rendering a component
  componentDidMount() {
    axios
      .get(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.ALL_BLOGS)
      .then((response) => {
        this.setState({ blogs: response.data });
      })
      .catch((error) => {
      });
  }

  //Creating a list of blogs
  blogList() {
    return this.state.blogs.map((currentblog) => {
      return <Blog blog={currentblog} key={currentblog.topic} />;
    });
  }

  //main render method to render all the blogs
  render() {
    return (
      <div style={{ marginTop: 75 }}>
        <h2 className="text-center">Blogs</h2>
        <br />
        <div>{this.blogList()}</div>
        <Footer />
      </div>
    );
  }
}

export default Blogs;
