/**
 * @author Ruminder Singh <ruminder.singh@dal.ca>
 */

import React, { Component } from "react";
import axios from "axios";
import { APP_URL_CONFIG } from "../../App.Urls";
import "../../css/careers/apply.css";

export default class Apply extends Component {
  state = {
    open: this.props.open,
    content: this.props.content,
    title: this.props.title,
    key: this.props.key,
    selectedFile: null,
    applicationSubmitted: false,
    errorMsg: null,
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const query = new URLSearchParams(this.props.location.search);
    let jobId = query.get("jobId");
    const data = new FormData(event.target);
    let jsonData = new FormData();
    jsonData.append("file", this.state.selectedFile);
    jsonData.append("name", data.get("name"));
    jsonData.append("email", data.get("email"));
    jsonData.append("mobile", data.get("mobile"));
    jsonData.append("coverLetter", data.get("coverletter"));
    jsonData.append("currentCity", data.get("city"));
    jsonData.append("experience", data.get("experience"));
    jsonData.append("college", data.get("college"));
    jsonData.append("ctc", data.get("ctc"));
    jsonData.append("organization", data.get("organization"));
    jsonData.append("jobId", jobId);

    await axios
      .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.APPLY_JOB, jsonData, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        if (response.status === 202) {
          this.setState({ errorMsg: "You have already applied for this job" });
        } else {
          this.setState({ applicationSubmitted: true });
        }
      });
  };

  onChangeHandler = (event) => {
    let file = event.target.files[0];
    if (file["size"] > 4000000) {
      alert("File size must be less than 4MB");
      event.target.value = null;
      return;
    } else {
      let fileExten = file.name.split(".");
      if (fileExten[1] !== "pdf") {
        alert("Kindly uplaod pdf file only");
        event.target.value = null;
      } else {
        this.setState({
          selectedFile: file,
        });
      }
    }
  };

  checkExperience = (event) => {
    let exp = event.target.value;
    if (exp > 360) {
      alert("Kindly enter valid experience");
      event.target.value = null;
    }
  };
  render() {
    const query = new URLSearchParams(this.props.location.search);
    let title = query.get("title");
    if (this.state.errorMsg !== null) {
      alert(this.state.errorMsg);
      this.setState({ errorMsg: null });
    }
    let applicationView;
    if (this.state.applicationSubmitted) {
      applicationView = (
        <h3 className="applicationSubmitted">
          You application is successfully submitted. Kindly check your email.
        </h3>
      );
    } else {
      applicationView = (
        <div>
          <h3 className="title">Applying to {title} position</h3>
          <div className="jobApplyBody">
            <div className="layer">
              <form className="applyForm" onSubmit={this.handleSubmit}>
                <div>
                  <label for="Personal Information">
                    Personal Information <span className="required">*</span>
                  </label>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        title="Kindly enter valid email id"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="mobile"
                        placeholder="Your 10 digit mobile number"
                        pattern="[0-9]{10}"
                        title="Kindly enter valid mobile number"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6" />
                  </div>
                  <div className="form-group file">
                    <label>
                      Upload your resume.<span className="required">*</span>
                    </label>
                    <input
                      type="file"
                      required
                      title="Uplpad your resume"
                      name="resume"
                      className="form-control"
                      onChange={this.onChangeHandler}
                      className="form-control"
                    />
                    <small>Max file size 4Mb and only pdf file accepted</small>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="coverletter"
                      name="coverletter"
                      rows="3"
                      placeholder="Cover Letter"
                      required
                    />
                  </div>
                  <label>
                    Questions <span className="required">*</span>
                  </label>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="city"
                        placeholder="Your current city"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="number"
                        className="form-control"
                        id="experience"
                        name="experience"
                        onChange={this.checkExperience}
                        placeholder="Relevant no. of experience in months"
                        pattern="[0-9]{3}"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="college"
                        placeholder="Your college name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text">$</div>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          id="ctc"
                          name="ctc"
                          lang="fr"
                          pattern="[0-9]{10}"
                          title="Kindly enter valid ctc in numbers"
                          placeholder="Current annual compensation"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="organization"
                        placeholder="Your current oraganization"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6" />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary applyBtn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div style={{ paddingTop: 65 }} className="applyPage">
        {applicationView}
      </div>
    );
  }
}
