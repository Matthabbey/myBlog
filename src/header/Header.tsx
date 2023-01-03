import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src={"https://source.unsplash.com/random/1400x750?sig=1"}
        alt=""
      />
    </div>
  );
};

export default Header;
