import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={"https://source.unsplash.com/random/300x200?sig=1"} alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Styles</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          {<AiFillFacebook className="sidebarIcon" />}
          {<AiFillInstagram className="sidebarIcon" />}
          {<AiFillTwitterSquare className="sidebarIcon" />}
          {<BsPinterest className="sidebarIcon" />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
