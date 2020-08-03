//Author: Simranbanu Roshansha Diwan (B00833562)

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { APP_URL_CONFIG } from "../App.Urls";
import { UserContext } from "../contexts/UserContext";

//Class for component CreateBlog
export default class CreateBlog extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      topic: "",
      p1: "",
      p2: "",
    };
  }
  //Check if the admin has logged in or not
  componentDidMount() {
    if (!this.context.isUserLoggedIn()) {
      this.props.history.push({
        pathname: "/signin/",
        search: "?r=" + window.location.pathname,
      });
      return;
    }
  }

  //handling change in form inputs
  handleChange(e) {
    let target = e.target;
    let name = target.id;
    let value = target.value;

    this.setState({
      [name]: value,
    });
  }

  //handleSubmit method when admin hits submit for creating new blogs
  //Add that blog to the database and redirect admin to All blogs page
  async handleSubmit(e) {
    e.preventDefault();

    if (this.state.p1 !== "" && this.state.p2 !== "" && this.state.topic !== "") {
      axios
        .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.ADD_BLOG, {
          topic: this.state.topic,
          p1: this.state.p1,
          p2: this.state.p2,
        })
        .then((res) => {});
      setTimeout(() => {
        this.setState({ allBlogs: "temp" });
      }, 1000);
    } else {
      alert("Please fill all the fields");
    }
  }

  //render method for rendering the component
  render() {
    return (
      <div style={{ marginTop: 75 }}>
        {this.state.allBlogs === "temp" ? <Redirect to="/blogadmin" /> : null}
        <h3 className="text-center">Create new blog</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="m-5">
            <textarea
              id="topic"
              name="topic"
              placeholder="Write the title of a blog.."
              style={({ height: "170px" }, { width: "100%" })}
              value={this.state.topic}
              onChange={this.handleChange}
            ></textarea>
            <textarea
              id="p1"
              name="p1"
              placeholder="Write paragraph 1 of a blog.."
              style={({ height: "170px" }, { width: "100%" })}
              value={this.state.p1}
              onChange={this.handleChange}
            ></textarea>
            <textarea
              id="p2"
              name="p2"
              placeholder="Write paragraph 2 of a blog.."
              style={({ height: "170px" }, { width: "100%" })}
              value={this.state.p2}
              onChange={this.handleChange}
            ></textarea>
            <button>Create new blog</button>
          </div>
        </form>
      </div>
    );
  }
}
