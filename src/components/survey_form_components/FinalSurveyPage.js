/**
 * @author by Prerna Jain
 */
import React from "react";
import "../../css/survey/SurveyFinalPage.css";

// function to indicate the end of the survey
const finalPage = () => {
  return (
    <div className="final-outer-box" style={{ color: "black" }}>
      <p style={{ color: "black", fontSize: "20px" }}>
        <center>
          Thank you for letting us know about your experience so far. Your
          answers will help us make FindAbode even better for you and other
          guests.
        </center>
      </p>
      <p style={{ color: "black", fontSize: "18px" }}>
        <center>Thanks, The FindAbode Team.</center>
      </p>
    </div>
  );
};
export default finalPage;
