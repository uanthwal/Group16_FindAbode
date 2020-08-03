/**
 * @author Ruminder Singh <ruminder.singh@dal.ca>
 */

import React, { Component } from "react";

import AddNewJob from "./AddNewJob";
import "../../css/careers/department.css";
import "../../css/careers/adminjob.css";

export default class AdminJob extends Component {
  state = {
    departments: [
      {
        key: 1,
        selected: true,
        classes: "selected",
        name: "Add new Job",
      },
    ],
    selectDept: 1,
  };

  render() {

    return (
      <div style={{ paddingTop: 65 }} className="careerPage">
        <div className="jobPortal">
          <div className="carrerHeading container">
            <h3>Jobs Portal</h3>
          </div>
          <div className="openPostionsLayer container-fluid">
            <div className="departments">
              <ul>
                <li className="selected">
                  <a>Add new job</a>
                </li>
              </ul>
            </div>
            <AddNewJob />
          </div>
        </div>
      </div>
    );
  }
}
