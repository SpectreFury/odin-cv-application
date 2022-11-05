import Image from "../../mrbeast.jpg";

import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="image-container">
        <img src={Image} />
      </div>
    </div>
  );
};

export default Profile;
