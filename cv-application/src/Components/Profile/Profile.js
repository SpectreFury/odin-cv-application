import React, { Component } from "react";
import Image from "../../mrbeast.jpg";

import "./Profile.css";

class Profile extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="profile-container">
        <div className="image-container">
          <img src={Image} />
        </div>
      </div>
    );
  }
}

export default Profile;
