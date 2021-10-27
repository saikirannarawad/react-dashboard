import React from "react";
import "./Header.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PopupModal from "./PopupModal";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  // console.log(basket);

  return (
    <nav className="header">
      {/* logo on the left */}

      <img
        className="header__logo"
        src="https://writebox.co/public/assets/images/writebox-logo.png"
        alt="amazon-logo"
      />

      {/* search box */}

      <div className="header__search">
        <input
          type="text"
          placeholder="Search Here"
          className="header__searchInput"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links */}
      <div className="header__nav">
        {/* 1st link */}
        <div className="header__option">
          <span className="header__optionLineTwo">
            <PopupModal />
          </span>
        </div>

        {/* 2nd link */}
        <div className="header__option">
          <span className="header__optionLineTwo">
            <NotificationsActiveIcon className="notification__icon" />
          </span>
        </div>

        {/* 3rd link */}
        <div className="header__option">
          <span className="header__optionLineTwo">
            <PermIdentityIcon className="identity__icon" />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
