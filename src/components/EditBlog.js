//Author: Simranbanu Roshansha Diwan (B00833562)

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { APP_URL_CONFIG } from "../App.Urls";
import { UserContext } from "../contexts/UserContext";

//EditBlog class component
export default class EditBlog extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteBlog = this.deleteBlog.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      topic: "",
      p1: "",
      p2: "",
    };
  }

  //method for handling changes in form inputs
  handleChange(e) {
    let target = e.target;
    let name = target.id;
    let value = target.value;

    this.setState({
      [name]: value,
    });
  }

  //method for deleting blogs by making a backend request to delete the blog from the database
  //After successful deletion, redirect admin to View all blogs page.
  deleteBlog() {
    axios
      .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.DELETE_BLOG, {
        topic: this.state.topic,
      })
      .then((res) => {});
    alert("Blog has been deleted successfully");
    setTimeout(() => {
      this.setState({ allBlogs: "temp" });
    }, 1000);
  }

  //Method to  fetch data from the backend and set the state for the specific blog on which admin wants to perform editing
  componentDidMount() {
    if (!this.context.isUserLoggedIn()) {
      this.props.history.push({
        pathname: "/signin/",
        search: "?r=" + window.location.pathname,
      });
      return;
    }
    axios
      .get(
        APP_URL_CONFIG.BASE_URL +
          APP_URL_CONFIG.GET_ONE_BLOG +
          this.props.match.params.topic
      )
      .then((response) => {
        this.setState({
          topic: response.data[0].topic,
          p1: response.data[0].p1,
          p2: response.data[0].p2,
        });
      })
      .catch((error) => {
      });
  }

  //Handle submit method for submitting updates to the backend and update content in the database
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.p1 !== "" && this.state.p2 !== "" && this.state.topic !== "") {
      axios
        .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.EDIT_BLOG, {
          topic: this.state.topic,
          p1: this.state.p1,
          p2: this.state.p2,
        })
        .then((res) => {
        })
        .catch((err) => {});

      setTimeout(() => {
        this.setState({ allBlogs: "temp" });
      }, 1000);
    } else {
      alert("Please fill all the fields");
    }
  };

  //render method to render the component
  render() {
    return (
      <div style={{ marginTop: 75 }}>
        {this.state.allBlogs === "temp" ? <Redirect to="/blogadmin" /> : null}
        <h3 className="text-center">Edit blog</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="m-5">
            <textarea
              id="topic"
              name="topic"
              placeholder="Write the title of a blog.."
              style={({ height: "170px" }, { width: "100%" })}
              value={this.state.topic}
              onChange={this.handleChange}
              disabled="disabled"
            ></textarea>
            <textarea
              id="p1"
              name="p1"
              placeholder="Write paragraph 1 of a blog.."
              style={({ height: "300px" }, { width: "100%" })}
              value={this.state.p1}
              onChange={this.handleChange}
            ></textarea>
            <textarea
              id="p2"
              name="p2"
              placeholder="Write paragraph 2 of a blog.."
              style={({ height: "300px" }, { width: "100%" })}
              value={this.state.p2}
              onChange={this.handleChange}
            ></textarea>
            <button type="submit">Update</button>
            <button type="button" onClick={this.deleteBlog}>
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}
