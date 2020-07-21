import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Links from "../components/Links";
import Footer from "../components/Footer";
import { APP_URL_CONFIG } from "../App.Urls";

export default class CreateBlog extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
    this.state = {
      topic:"",
      p1:"",
      p2:""
    };
  }

  handleChange(e) {
    let target = e.target;
    let name = target.id;
    let value = target.value;

    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    
      if (this.state.p1 != "" && this.state.p2 != "" && this.state.topic!="") {

        axios
          .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.ADD_BLOG, {
            topic: this.state.topic,
            p1: this.state.p1,
            p2: this.state.p2,
          })
          .then((res) => console.log(res.data));
        window.location.reload();
      } else {
        alert("Please fill all the fields");
      }
    }

  render() {
    return (
      <div style={{ marginTop: 65 }}>
        <h3 class="text-center">Create new blog</h3>
          <form onSubmit={this.handleSubmit}>
            <div>
            <textarea
                id="topic" name="topic"
                placeholder="Write the title of a blog.."
                style={({ height: "170px" }, { width: "100%" })}
                value={this.state.topic}
                onChange={this.handleChange}
              ></textarea>
            <textarea
                id="p1" name="p1"
                placeholder="Write paragraph 1 of a blog.."
                style={({ height: "170px" }, { width: "100%" })}
                value={this.state.p1}
                onChange={this.handleChange}
              ></textarea> 
              <textarea
                id="p2" name="p2"
                placeholder="Write paragraph 2 of a blog.."
                style={({ height: "170px" }, { width: "100%" })}
                value={this.state.p2}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <button>Create new blog</button>
          </form>
        <Links />
        <Footer />
      </div>
    );
  }
}
