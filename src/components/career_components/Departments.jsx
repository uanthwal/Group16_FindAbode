/**
 * @author Ruminder Singh <ruminder.singh@dal.ca>
 */

import React, { Component } from "react";

import "../../css/careers/department.css";

export default class Departments extends Component {
  state = {
    classes: this.props.classes,
    departmentName: this.props.departmentName,
    index: this.props.index,
    selected: this.props.selected,
  };

  render() {
    const index = this.props.index;
    return (
      <li
        tabIndex={this.props.index}
        className={this.props.classes}
        onClick={() => {
          this.props.deptClick(index);
        }}
      >
        <a>{this.state.departmentName}</a>
      </li>
    );
  }
}
