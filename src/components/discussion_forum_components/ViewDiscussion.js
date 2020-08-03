//Author: Simranbanu Roshansha Diwan (B00833562)
import React, { Component } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import Links from "../../components/Links";
import Footer from "../../components/Footer";
import { APP_URL_CONFIG } from "../../App.Urls";

//Reusable Answer component
const Answer = (props) => (
  <div className="card mb-3">
    <h5 className="card-title">{props.answer.user}</h5>
    <p className="card-text">{props.answer.ans}</p>
  </div>
);

//class component for ViewDiscussion
export default class ViewDiscussion extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.answerList = this.answerList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      newans: "",
      answers: [],
    };
  }

  //fething data from the backend
  componentDidMount() {
    axios
      .get(
        APP_URL_CONFIG.BASE_URL +
          APP_URL_CONFIG.VIEW_DISCUSSION +
          this.props.match.params.topic
      )
      .then((response) => {
        this.setState({
          answers: response.data,
        });
      })
      .catch((error) => {
      });
  }

  //generating UI for list of answers
  answerList() {
    return this.state.answers.map((currentanswer) => {
      return <Answer answer={currentanswer} key={currentanswer._id} />;
    });
  }

  //handling change in input field of form
  handleChange(e) {
    let target = e.target;
    let value = target.value;

    this.setState({
      newans: value,
    });
  }

  //submitting data to the backend
  async handleSubmit(e) {
    e.preventDefault();
    //checking user login
    const email = this.context.userCredentials("email");
    const username = this.context.userCredentials("username");
    if (!this.context.isUserLoggedIn()) {
      this.props.history.push({
        pathname: "/signin/",
        search: "?r=" + window.location.pathname,
      });
      return;
    } else {
      if (this.state.newans !== "") {
        axios
          .post(
            APP_URL_CONFIG.BASE_URL +
              APP_URL_CONFIG.DISCUSSION_FORUM +
              this.props.match.params.topic +
              "/addans",
            {
              ans: this.state.newans,
              email: email,
              user: username,
            }
          )
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
        <h3 className="text-center">Topic: {this.props.match.params.topic}</h3>
        <div className="m-5">
          {this.answerList()}
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <textarea
                  id="newans"
                  placeholder="Please write your response here..."
                  style={({ height: "170px" }, { width: "100%" })}
                  value={this.state.newans}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <button>Post</button>
            </form>
          </div>
        </div>
        <Links />
        <Footer />
      </div>
    );
  }
}
