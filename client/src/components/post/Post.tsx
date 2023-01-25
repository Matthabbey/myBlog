import { Link } from "react-router-dom";
import "./post.css";

interface Props {
  post: any;

}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <div className="post">
      {post.photo && 
      <img
        className="postImg"
        src={post.photo}
        alt=""
      />
      }
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((cat: any)=>(
            <span className="postCat">{cat.name}</span>
          ))}
        </div> 
        <Link to={`post/${post._id}`} className="link">
        <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <div className="postDesc">
      {post.desc}
      </div>
    </div>
  );
};

export default Post;
