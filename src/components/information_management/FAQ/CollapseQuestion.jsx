/**
 * @author by Souvik Das(Souvik.das@dal.ca)
 * BANNER ID: B00847127
 */
import React, { Component } from "react";

//Class for CollapseQuestion  component
export default class CollapseQuestion extends Component {
  state = {
    open: this.props.open,
    content: this.props.content,
    title: this.props.title,
    key: this.props.key,
  };

  //method which keeps the toggle open once clicked
  toggleCollapseView = () => {
    this.setState((prevState) => {
      return { open: !prevState.open };
    });
  };

  //render method to show a FAQ question card
  render() {
    const show = this.state.open ? "show" : "";
    return (
      <div className="card">
        <div className="card-header" id="headingOne">
          <h6 className="mb-0">
            {this.props.title}
            <i
              className="fa fa-caret-down"
              onClick={this.toggleCollapseView}
              data-toggle="collapse"
            />
          </h6>
        </div>
        <div className={"card-body collapse" + show} id="demo">
          {this.props.content}
        </div>
      </div>
    );
  }
}
