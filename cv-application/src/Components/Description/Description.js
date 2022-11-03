import React, { Component } from "react";
import "./Description.css";

class Description extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { editDetails } = this.props;

    return (
      <div className="description">
        <h1 className="description-title">Description</h1>
        <p className="description-text" onClick={editDetails}>
          Profiles are the first opportunity to highlight a person's relevant
          career experiences, skills, and what goals they are looking to achieve
          while in his or her next position. Your profile should be customized
          to match the qualifications the employer is seeking. In your profile,
          only include the skills and qualifications that relate to the specific
          job for which you are applying for. Additional tips are included in
          the download
        </p>
      </div>
    );
  }
}

export default Description;
