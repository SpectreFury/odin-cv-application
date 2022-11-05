import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faEnvelope,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Contacts.css";

const Contacts = (props) => {
  const { editDetails } = props;

  return (
    <div className="contacts">
      <h2 className="contacts-title">Contact</h2>
      <div className="grid-container">
        <div className="grid-left">
          <FontAwesomeIcon icon={faMobile} className="icons" />
          <FontAwesomeIcon icon={faEnvelope} className="icons" />
          <FontAwesomeIcon icon={faHouse} className="icons" />
          <FontAwesomeIcon icon={faGithub} className="icons" />
        </div>
        <div className="grid-right">
          <p onClick={editDetails}>1234567890</p>
          <p onClick={editDetails}>yourmail@mail.com</p>
          <p onClick={editDetails}>Country, City, Zip</p>
          <p onClick={editDetails}>https://github.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
