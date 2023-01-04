import React from "react";
import "./topbar.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { BsPinterest, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Topbar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        {<AiFillFacebook className="topIcon" />}
        {<AiFillInstagram className="topIcon" />}
        {<AiFillTwitterSquare className="topIcon" />}
        {<BsPinterest className="topIcon" />}
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to={"/"}>
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/settings"}>
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/"}>
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/write"}>
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src={"https://source.unsplash.com/random/200x200?sig=1"}
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to={"/login"}>
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to={"/register"}>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        {<BsSearch className="topSearchIcon" />}
      </div>
    </div>
  );
};

export default Topbar;
