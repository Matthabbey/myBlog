import "./singlePost.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getSinglePost } from "../../api";


const SinglePost = () => {

  const location = useLocation()
  
  const path = location.pathname.split("/")[2] 
  const [post, setPost] = useState<any>({})
  // console.log(path);

  useEffect(()=>{

    getSinglePost(path).then((response)=>{
      let result = (response?.data.findUser)
      console.log(result)
      setPost(result)
    })

    // const getSingle = async() => {
    //   const response = await getSinglePost()
    //   console.log(response?.data.findUser);
      
    //   setPost(response?.data.findUser) 
    // }
    // getSingle()
      }
  , [path])



  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo &&
        
        <img
          className="singlePostImg"
          src={post.photo}
          alt=""
        />
        }
        <h1 className="singlePostTitle">{post.title}
          <div className="singlePostEdit">
            <FiEdit className="singlePostIcon" />
            <RiDeleteBinLine className="singlePostIcon" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>{post.username}</b>
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">{post.desc}
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
