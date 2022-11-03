import React, { Component } from "react";
import Profile from "./Components/Profile/Profile";
import Name from "./Components/Name/Name";
import Contacts from "./Components/Contacts/Contacts";
import Education from "./Components/Education/Education";
import Description from "./Components/Description/Description";
import Work from "./Components/Work/Work";

import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  editDetails(e) {
    e.target.setAttribute("contentEditable", true);
  }

  render() {
    return (
      <div className="card">
        <div className="card-left">
          <Profile editDetails={this.editDetails} />
          <Contacts editDetails={this.editDetails} />
          <Education editDetails={this.editDetails} />
        </div>
        <div className="card-right">
          <Name editDetails={this.editDetails} />
          <Description editDetails={this.editDetails} />
          <Work editDetails={this.editDetails} />
        </div>
      </div>
    );
  }
}

export default App;
