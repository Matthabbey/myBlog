import React from "react";
import "./topbar.css";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai'
import { BsPinterest, BsSearch } from 'react-icons/bs'

const Topbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
      {<AiFillFacebook className="topIcon"/>}
      {<AiFillInstagram className="topIcon"/>}
      {<AiFillTwitterSquare className="topIcon"/>}
      {<BsPinterest className="topIcon"/>}
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">Home</li>
            <li className="topListItem">About</li>
            <li className="topListItem">Write</li>
            <li className="topListItem">Contact</li>
            <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src={"https://source.unsplash.com/random/200x200?sig=1"} alt="" />
        {<BsSearch className="topSearchIcon"/>}
      </div>
    </div>
  );
};

export default Topbar;
