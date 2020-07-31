/**
 * @author by Souvik Das(Souvik.das@dal.ca)
 * BANNER ID: B00847127
 */
import React, { Component } from "react";

import "../../../css/help/faq_sections.css";

//Class for HelpOptions component
export default class HelpOptions extends Component {
  state = {
    classes: this.props.classes,
    departmentName: this.props.departmentName,
    index: this.props.index,
    selected: this.props.selected,
  };

  //Dynamically renders the list of FAQs fetched from the backend
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
