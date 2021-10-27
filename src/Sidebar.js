import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import Help from "@mui/icons-material/Help";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import LockOpenIcon from "@mui/icons-material/LockOpen";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://writebox.co/public/assets/images/writebox-logo.png"
        alt=""
      />
      <div className="sidebar__homeIcon">
        <SidebarOption Icon={HomeIcon} title="Dashboard" />
      </div>

      <div className="sidebar__helpIcon">
        <SidebarOption Icon={Help} title="Help" />
      </div>
      <div className="sidebar__personIcon">
        <SidebarOption Icon={PersonIcon} title="Profile" />
      </div>
      <div className="sidebar__loginIcon">
        <SidebarOption Icon={LoginIcon} title="Login" />
      </div>
      <div className="sidebar__registerIcon">
        <SidebarOption Icon={LockOpenIcon} title="Register" />
      </div>

      <br />
      <strong className="sidebar__title">MORE</strong>
      <hr />
    </div>
  );
}

export default Sidebar;
