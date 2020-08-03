/**
 * @author Ruminder Singh <ruminder.singh@dal.ca>
 */

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CollapsePosition extends Component {
  state = {
    open: this.props.open,
    content: this.props.content,
    title: this.props.title,
    key: this.props.key,
  };

  toggleCollapseView = () => {
    this.setState((prevState) => {
      return { open: !prevState.open };
    });
  };

  render() {
    const show = this.state.open ? "show" : "";
    let title = this.props.title;
    let jobId = this.props.jobId;
    let jobTitle = title + " (JobId: " + jobId + " )";
    let jobDesc = this.props.content.split(".");
    let jobRequirements = jobDesc.map((desc) => <li>{desc}</li>);
    return (
      <div className="card">
        <div className="card-header" id="headingOne">
          <h6 className="mb-0">
            {jobTitle}
            <i
              className="fa fa-caret-down"
              onClick={this.toggleCollapseView}
              data-toggle="collapse"
            />
          </h6>
        </div>
        <div className={"card-body collapse" + show} id="demo">
          <ul>{jobRequirements}</ul>
          <Link
            className="btn btn-primary"
            to={`/job/apply?jobId=${jobId}&title=${title}`}
          >
            Apply
          </Link>
        </div>
      </div>
    );
  }
}
