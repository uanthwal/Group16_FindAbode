import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Links from "../components/Links";
import Footer from "../components/Footer";
import { APP_URL_CONFIG } from "../App.Urls";


export default class EditBlog extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteBlog = this.deleteBlog.bind(this);
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

  deleteBlog(){
    axios
          .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.DELETE_BLOG, {
            topic: this.state.topic
          })
          .then((res) => console.log(res.data));
          alert("Blog has been deleted successfully");
          setTimeout(()=>{this.setState({allBlogs:"temp"});},1000);
  }

  componentDidMount() {
        axios
          .get(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.GET_ONE_BLOG +this.props.match.params.topic)
          .then((response) => {
            this.setState({ topic: response.data[0].topic,
                p1: response.data[0].p1,
                p2:response.data[0].p2
            });
            console.log(response.data);
            let a=this.state.p1
            console.log(a);
          })
          .catch((error) => {
            console.log(error);
          });
    }

  handleSubmit = (e) =>{
    e.preventDefault();
      if (this.state.p1 != "" && this.state.p2 != "" && this.state.topic!="") {
        console.log("aaaaaaàa");

       axios
          .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.EDIT_BLOG, {
            topic: this.state.topic,
            p1: this.state.p1,
            p2: this.state.p2,
          })
          .then((res) => {
            console.log(res.data);
          }).catch(err => console.log(err));
         
         setTimeout(()=>{this.setState({allBlogs:"temp"});},1000);
      //    this.setState({allBlogs:"temp"});
          //console.log("aaaaaaàa");
      } else {
        alert("Please fill all the fields");
      }
    }
    

  render() {
    return (
      <div style={{ marginTop: 75 }}>
        {this.state.allBlogs === "temp"? <Redirect to="/blogadmin"/> : null}
        <h3 className="text-center">Edit blog</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="m-5">
            <textarea
                id="topic" name="topic"
                placeholder="Write the title of a blog.."
                style={({ height: "170px" }, { width: "100%" })}
                value={this.state.topic}
                onChange={this.handleChange}
                disabled="disabled"
              ></textarea>
            <textarea
                id="p1" name="p1"
                placeholder="Write paragraph 1 of a blog.."
                style={({ height: "300px" }, { width: "100%" })}
                value={this.state.p1}
                onChange={this.handleChange}
              ></textarea> 
              <textarea
                id="p2" name="p2"
                placeholder="Write paragraph 2 of a blog.."
                style={({ height: "300px" }, { width: "100%" })}
                value={this.state.p2}
                onChange={this.handleChange}
              ></textarea>
              <button type="submit">Update</button>
              <button type="button" onClick={this.deleteBlog}>Delete</button>
            </div>
            
          </form>
          
        <Links />
        <Footer />
      </div>
    );
  }
}
