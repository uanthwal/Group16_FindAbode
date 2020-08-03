/**
 * @author Ruminder Singh <ruminder.singh@dal.ca>
 */

import React, { Component } from "react";
import axios from "axios";
import "../../css/careers/openpositions.css";

import { APP_URL_CONFIG } from "../../App.Urls";

export default class AddNewJob extends Component {
  state = {
    open: false,
    toggleMenu: this.toggleMenu,
    prevDept: -1,
    positionList: [],
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    await axios
      .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.ADD_JOB, {
        jobId: data.get("jobId"),
        deptId: data.get("deptId"),
        desc: data.get("desc"),
        title: data.get("title"),
      })
      .then((response) => {
        if (response.status === 202) {
          alert(response.data);
        } else {
          alert("Job added successfully");
          document.getElementById("newJob").reset();
        }
      });
  };

  render() {
    return (
      <div className="openings">
        <div className="openingHeading">
          <h2>Add new Job</h2>
        </div>
        <form className="applyForm" id="newJob" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="jobId"
              name="jobId"
              placeholder="Enter jobId"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="deptId"
              name="deptId"
              placeholder="Enter Department ID"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Enter Title"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="desc"
              name="desc"
              rows="6"
              placeholder="Enter description of job"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary applyBtn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
