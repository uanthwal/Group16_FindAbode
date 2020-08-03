/**
 * @author by Prerna Jain
 */
import React, { Component } from "react";
import Axios from "axios";
import "../../css/survey/Survey.css";
import { APP_URL_CONFIG } from "../../App.Urls";
import Finalpage from "./FinalSurveyPage";
import Links from "../Links";
import Footer from "../Footer";

class Survey extends Component {
  constructor(props) {
    super();
    this.state = {
      questions: [
        {
          question: "",
          choice1: "",
          choice2: "",
          choice3: "",
        },
      ],
      i: 0,
      selectedOption: "",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  // to fetch the survey questions from the database
  componentWillMount() {
    Axios.get(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.SURVEY_QUESTION)
      .then((res) => {
        this.setState({
          questions: res.data,
        });
      })
      .catch((err) => {
      });
  }

  // function to capture the user's response for a particular question
  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  // function to capture the user's response to database
  formSubmit(event) {
    event.preventDefault();
    let k = this.state.i;
    Axios.post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.SURVEY_ANSWER, {
      question: this.state.questions[this.state.i].question,
      response: this.state.selectedOption,
    });
    this.setState({
      i: k + 1,
      selectedOption: "",
    });
  }

  render() {
    return (
      <div className="outer-form">
        {this.state.i < this.state.questions.length ? (
          <div>
            <label style={{ color: "black", fontSize: "22px" }}>
              <center>Feedback Questions</center>
            </label>
            <div className="question-box">
              <form onSubmit={this.formSubmit}>
                <label style={{ fontSize: "18px" }}>
                  {this.state.i + 1}.{" "}
                  {this.state.questions[this.state.i].question}
                </label>
                {/* {this.state.selectedOption = ""} */}
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value={this.state.questions[this.state.i].choice1}
                      checked={
                        this.state.selectedOption ===
                        this.state.questions[this.state.i].choice1
                      }
                      onChange={this.onValueChange}
                    />
                    {" " + this.state.questions[this.state.i].choice1}
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value={this.state.questions[this.state.i].choice2}
                      checked={
                        this.state.selectedOption ===
                        this.state.questions[this.state.i].choice2
                      }
                      onChange={this.onValueChange}
                    />
                    {" " + this.state.questions[this.state.i].choice2}
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value={this.state.questions[this.state.i].choice3}
                      checked={
                        this.state.selectedOption ===
                        this.state.questions[this.state.i].choice3
                      }
                      onChange={this.onValueChange}
                    />
                    {" " + this.state.questions[this.state.i].choice3}
                  </label>
                </div>
                {this.state.selectedOption !== "" ? (
                  <button className="button-question" type="submit" >
                    Next
                  </button>
                ) : (
                  <button title="Please select an option" className="button-question-disabled" type="submit" disabled>
                    Next
                  </button>
                )}
              </form>
            </div>
          </div>
        ) : (
          <Finalpage />
        )}
        <Links />
				<Footer />
      </div>
    );
  }
}
export default Survey;
