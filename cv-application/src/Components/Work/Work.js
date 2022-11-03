import React, { Component } from "react";
import "./Work.css";

class Work extends Component {
  constructor() {
    super();
  }

  render() {
    const { editDetails } = this.props;

    return (
      <div className="work">
        <h1 className="work-title">Work Experience</h1>
        <div className="job-container">
          <p className="job-title" onClick={editDetails}>
            Your Job Title Goes Here
          </p>
          <p className="job-company" onClick={editDetails}>
            Company Name | 2008-2010
          </p>
          <p className="job-description" onClick={editDetails}>
            Describe your responsibilities in concise statements led by strong
            verbs. Focus on those skills and strengths that you possess and that
            you have identified as being important to your field. Try to
            incorporate industry specific key words.
          </p>
        </div>
        <div className="job-container">
          <p className="job-title" onClick={editDetails}>
            Your Job Title Goes Here
          </p>
          <p className="job-company" onClick={editDetails}>
            Company Name | 2008-2010
          </p>
          <p className="job-description" onClick={editDetails}>
            Describe your responsibilities in concise statements led by strong
            verbs. Focus on those skills and strengths that you possess and that
            you have identified as being important to your field. Try to
            incorporate industry specific key words.
          </p>
        </div>
      </div>
    );
  }
}

export default Work;
