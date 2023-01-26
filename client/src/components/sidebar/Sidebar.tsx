import React, { useEffect, useState } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { getCategory, getSinglePost } from "../../api";
import "./sidebar.css";

const Sidebar = () => {
  const [cats, setCats] = useState([])

  useEffect(()=>{
    getCategory().then((response)=>{
      const cats = response?.data.AllCategories
      setCats(cats)
    })
  }, [])
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
          {cats.map((c: any)=>(
            <li className="sidebarListItem" key={c._id}>{c.name}</li>

          ))}

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
function setPost(result: any) {
  throw new Error("Function not implemented.");
}

