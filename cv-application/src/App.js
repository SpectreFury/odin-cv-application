import Profile from "./Components/Profile/Profile";
import Name from "./Components/Name/Name";
import Contacts from "./Components/Contacts/Contacts";
import Education from "./Components/Education/Education";
import Description from "./Components/Description/Description";
import Work from "./Components/Work/Work";

import "./App.css";

const App = () => {
  const editDetails = (e) => {
    e.target.setAttribute("contentEditable", true);
  };

  return (
    <div className="card">
      <div className="card-left">
        <Profile editDetails={editDetails} />
        <Contacts editDetails={editDetails} />
        <Education editDetails={editDetails} />
      </div>
      <div className="card-right">
        <Name editDetails={editDetails} />
        <Description editDetails={editDetails} />
        <Work editDetails={editDetails} />
      </div>
    </div>
  );
};

export default App;
