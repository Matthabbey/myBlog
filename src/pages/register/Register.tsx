import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="username"
          className="registerInput"
          placeholder="username"
        />
        <label>Email</label>
        <input type="email" className="registerInput" placeholder="@mail" />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Password"
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton"><Link className="link" to={"/login"}>Login</Link></button>
    </div>
  );
};

export default Register;
