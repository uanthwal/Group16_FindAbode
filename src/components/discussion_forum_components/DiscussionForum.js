//Author: Simranbanu Roshansha Diwan (B00833562)

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";
import { UserContext } from "../../contexts/UserContext";
import { APP_URL_CONFIG } from "../../App.Urls";

//reusable question component
const Question = (props) => (
  <tr>
    <td>
      <Link to={"discussionforum1/" + props.question.topic}>
        {props.question.topic}
      </Link>
    </td>
    <td>{props.question.user}</td>
  </tr>
);

//class component for discussion forum
export default class DiscussionForum extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.questionList = this.questionList.bind(this);
    this.state = {
      newques: "",
      questions: [],
    };
  }

  //fetching data on all the available topics and users who posted them
  componentDidMount() {
    axios
      .get(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.DISCUSSION_FORUM)
      .then((response) => {
        this.setState({ questions: response.data });
      })
      .catch((error) => {
      });
  }

  //hanling change in the input field of form
  handleChange(e) {
    let target = e.target;
    let value = target.value;

    this.setState({
      newques: value,
    });
  }

  //method to generating a UI for list of topics
  questionList() {
    return this.state.questions.map((currentquestion) => {
      return (
        <Question question={currentquestion} key={currentquestion.topic} />
      );
    });
  }

  //method for submitting a new topic that user wants to create
  async handleSubmit(e) {
    e.preventDefault();
    //checking user login
    const email = this.context.userCredentials("email");
    if (!this.context.isUserLoggedIn()) {
      this.props.history.push({
        pathname: "/signin/",
        search: "?r=" + window.location.pathname,
      });
      return;
    } else {
      if (this.state.newques !== "") {
        const username = this.context.userCredentials("username");
        //sending data to the backend
        axios
          .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.ADD_TOPIC, {
            topic: this.state.newques,
            email: email,
            user: username,
          })
          .then((res) => {
            window.location.reload();
          });
      } else {
        alert("Please write your response.");
      }
    }
  }
  //render method to render the component
  render() {
    return (
      <div style={{ marginTop: 75 }}>
        <h3 className="text-center">Discussions</h3>
        <div className="m-3">
          <table className="table ">
            <thead className="thead-light">
              <tr>
                <th>Topic</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>{this.questionList()}</tbody>
          </table>
        </div>
        <div className="m-5">
          <form onSubmit={this.handleSubmit}>
            <div>
              <textarea
                id="newques"
                placeholder="Write a new topic to discuss.."
                style={({ height: "170px" }, { width: "100%" })}
                value={this.state.newques}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <button>Start new discussion</button>
          </form>
        </div>
        <links />
        <footer />
        <Footer />
      </div>
    );
  }
}
