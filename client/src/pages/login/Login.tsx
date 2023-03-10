import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
        <span className="loginTitle">Login As User</span>
        <form className="loginForm">
        <label>Email</label>
          <input type="email" className='loginInput' placeholder="@mail" />
          <label>Password</label>
          <input type="password" className='loginInput' placeholder="Password" />
          <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton"><Link className='link' to={"/register"}>Register</Link></button>

    </div>
  )
}

export default Login