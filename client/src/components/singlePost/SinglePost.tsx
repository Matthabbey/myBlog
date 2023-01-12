import "./singlePost.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={"https://source.unsplash.com/random/900x550?sig=1"}
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet elit.
          <div className="singlePostEdit">
            <FiEdit className="singlePostIcon" />
            <RiDeleteBinLine className="singlePostIcon" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Ayoola</b>
          </span>
          <span className="singlePostDate"> 1 hour ago</span>
        </div>
        <p className="singlePostDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non delectus
          iure iste similique, quam labore quidem natus corporis vel adipisci
          exercitationem, ut minus molestias earum, accusamus quasi architecto
          tempora soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non delectus
          iure iste similique, quam labore quidem natus corporis vel adipisci
          exercitationem, ut minus molestias earum, accusamus quasi architecto
          tempora soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non delectus
          iure iste similique, quam labore quidem natus corporis vel adipisci
          exercitationem, ut minus molestias earum, accusamus quasi architecto
          tempora soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non delectus
          iure iste similique, quam labore quidem natus corporis vel adipisci
          exercitationem, ut minus molestias earum, accusamus quasi architecto
          tempora soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non delectus
          iure iste similique, quam labore quidem natus corporis vel adipisci
          exercitationem, ut minus molestias earum, accusamus quasi architecto
          tempora soluta.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
