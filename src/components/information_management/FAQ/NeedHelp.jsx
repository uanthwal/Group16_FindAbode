/**
 * @author by Souvik Das(Souvik.das@dal.ca)
 * BANNER ID: B00847127
 */
import React, { Component } from "react";
import "../../../css/help/faq.css";
import HelpOptions from "./HelpOptions";
import FAQs from "./FAQs";
import Footer from "../../Footer";

// Main Component which performs FAQ section selection
export default class NeedHelp extends Component {
  state = {
    faq_sections: [
      {
        key: "faqs",
        name: "FAQs",
        classes: "selected",
        selected: true,
      },
    ],
    selectDept: "faqs",
    sideBarVisible: false,
  };

  //Based on Department Selection the faqSection gets activated
  handleDeptClick = (deptKey) => {
    const faqSections = this.state.faq_sections;
    const selectedDept = deptKey;
    for (let i = 0; i < faqSections.length; i++) {
      if (faqSections[i].key === deptKey) {
        faqSections[i].selected = true;
        faqSections[i].classes = "selected";
      } else {
        faqSections[i].selected = false;
        faqSections[i].classes = "";
      }
    }
    this.setState({ faq_sections: faqSections, selectDept: selectedDept });
  };
  // sidebarButtonClickHandler = () => {
  //     this.setState((previousState) => {
  //         return {sideBarVisible: !previousState.sideBarVisible};
  //     });
  // };
  // outSideOfSideBarClicked = () => {
  //     this.setState({sideBarVisible: false});
  // };

  //rendering the FAQ selection page
  render() {
    let deptList = this.state.faq_sections;
    let querySection = null;
    if (this.state.selectDept === "faqs") {
      querySection = <FAQs selectedDept={this.state.selectDept} />;
    }
    return (
      <div style={{ paddingTop: 65 }} className="faqPage">
        <div className="faqBody">
          <div className="carrerHeading container">
            <h3>Help</h3>
            <small>Lets help to your needs</small>
          </div>
          <div className="openPostionsLayer container-fluid">
            <div className="departments">
              <ul>
                {deptList.map((dept) => (
                  <HelpOptions
                    classes={dept.classes}
                    deptClick={this.handleDeptClick}
                    departmentName={dept.name}
                    index={dept.key}
                    selected={dept.selected}
                  />
                ))}
              </ul>
            </div>
            {querySection}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
