import React, { Component } from "react";
import "./Name.css";

class Name extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mia Williams",
      title: "Professional Title",
    };
  }

  render() {
    const { name, title } = this.state;
    const { editDetails } = this.props;

    return (
      <div className="name-container">
        <h1 className="name" onClick={editDetails}>
          {name}
        </h1>
        <h4 className="title" onClick={editDetails}>
          {title}
        </h4>
      </div>
    );
  }
}

export default Name;
