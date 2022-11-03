import React, { Component } from "react";
import "./Education.css";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { editDetails } = this.props;

    return (
      <div className="education">
        <p className="education-title">Education</p>
        <div className="education-section">
          <p className="education-major" onClick={editDetails}>
            Enter Your Major
          </p>
          <p className="education-course" onClick={editDetails}>
            Business Administration
          </p>
          <p className="education-university" onClick={editDetails}>
            Name of University
          </p>
          <p className="education-year" onClick={editDetails}>
            2020-2024
          </p>
        </div>
        <div className="education-section">
          <p className="education-major" onClick={editDetails}>
            Enter Your Major
          </p>
          <p className="education-course" onClick={editDetails}>
            Business Administration
          </p>
          <p className="education-university" onClick={editDetails}>
            Name of University
          </p>
          <p className="education-year" onClick={editDetails}>
            2020-2024
          </p>
        </div>
      </div>
    );
  }
}

export default Education;
