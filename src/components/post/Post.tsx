import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src={"https://source.unsplash.com/random/900x400?sig=1"}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">LifeStyle</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet elit.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <div className="postDesc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, maxime
        fuga error molestiae odio earum repellendus quam vitae dignissimos,
        deserunt labore, explicabo qui magnam quae aliquam obcaecati saepe
        adipisci. Facilis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, maxime
        fuga error molestiae odio earum repellendus quam vitae dignissimos,
        deserunt labore, explicabo qui magnam quae aliquam obcaecati saepe
        adipisci. Facilis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, maxime
        fuga error molestiae odio earum repellendus quam vitae dignissimos,
        deserunt labore, explicabo qui magnam quae aliquam obcaecati saepe
        adipisci. Facilis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, maxime
        fuga error molestiae odio earum repellendus quam vitae dignissimos,
        deserunt labore, explicabo qui magnam quae aliquam obcaecati saepe
        adipisci. Facilis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, maxime
        fuga error molestiae odio earum repellendus quam vitae dignissimos,
        deserunt labore, explicabo qui magnam quae aliquam obcaecati saepe
        adipisci. Facilis.
      </div>
    </div>
  );
};

export default Post;
