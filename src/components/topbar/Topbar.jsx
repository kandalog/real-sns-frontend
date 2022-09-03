import React, { useContext } from "react";
import { Chat, Notifications, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Topbar.css";
import { AuthContext } from "../../states/AuthContext";

export const Topbar = () => {
  const { user } = useContext(AuthContext);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLICK_FOLDER;

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <span className="logo">Real SNS</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="探し物はなんですか?"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarItemIcons">
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </div>
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                PUBLIC_FOLDER + user.profilePicture ||
                PUBLIC_FOLDER + "/person/noAvatar.png"
              }
              alt=""
              className="topbarImage"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
