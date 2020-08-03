/**
 * @author Ruminder Singh <ruminder.singh@dal.ca>
 */

import React, { Component } from "react";
import axios from "axios";

import "../../css/careers/openpositions.css";
import CollapsePosition from "./CollapsePosition";
import { APP_URL_CONFIG } from "../../App.Urls";

export default class OpenPosition extends Component {
  state = {
    open: false,
    toggleMenu: this.toggleMenu,
    prevDept: -1,
    positionList: [],
  };

  getDepartmentJobs = async () => {
   
    await axios
      .get(
        APP_URL_CONFIG.BASE_URL +
          APP_URL_CONFIG.JOB_LIST +
          "?deptId=" +
          this.props.selectedDept,
        {}
      )
      .then((res) => {
        let jobList = res.data;
        if (jobList.length != null && jobList.length > 0) {
          let jobDetails = [];
          for (let i = 0; i < jobList.length; i++) {
            jobDetails[i] = {
              jobId: jobList[i].jobId,
              title: jobList[i].title,
              desc: jobList[i].desc,
              deptId: jobList[i].deptId,
              open: false,
            };
          }
          this.setState(() => {
            return { positionList: jobDetails };
          });
        }
      });
  };

  componentDidMount() {
    this.getDepartmentJobs();
  }

  render() {
    let dept = this.state.prevDept;
    let prevDept = this.props.selectedDept;
    if (prevDept !== dept) {
      this.getDepartmentJobs();
      this.setState(() => {
        return { prevDept: this.props.selectedDept };
      });
    }
    const positionList = this.state.positionList;
    return (
      <div className="openings">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className="openingHeading">
          <h2>Current Openings</h2>
        </div>
        <div className="openPostions" id="accordion">
          {positionList.map((item) => (
            <CollapsePosition
              open={item.open}
              content={item.desc}
              title={item.title}
              jobId={item.jobId}
              key={item.key}
            />
          ))}
        </div>
      </div>
    );
  }
}
