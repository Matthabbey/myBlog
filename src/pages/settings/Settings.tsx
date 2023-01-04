import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";
import { FaRegUserCircle } from 'react-icons/fa'

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img src={"https://source.unsplash.com/random/600x300?sig=1"} alt="" />
            <label htmlFor="fileInput">
              <FaRegUserCircle className="settingsPPIcon"/>
            </label>
            <input type="file" id="fileInput" style={{display: "none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="ayoola" />
          <label>Email</label>
          <input type="email" placeholder="@mail" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
