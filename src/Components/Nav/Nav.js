import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="home-ul">
        <li className="home-li">
          <Link to="/mainhome" className="active home-a">
            <h1>Home</h1>
          </Link>
        </li>
        <li className="home-li">
          <Link to="/adduser" className="active home-a">
            <h1>Add User</h1>
          </Link>
        </li>
        <li className="home-li">
          <Link to="/userdetails" className="active home-a">
            <h1>User Details</h1>
          </Link>
        </li>
        <li className="home-li">
          <Link to="/conus" className="active home-a">
            <h1>Contact Us</h1>
          </Link>
        </li>
        <li className="home-li">
          <Link to="/sendpdf" className="active home-a">
            <h1>send pdf</h1>
          </Link>
        </li>
           <li className="home-li">
          <Link to="/imgpart" className="active home-a">
            <h1>Photos</h1>
          </Link>
        </li>
        <li className="home-li">
          <Link to="/regi" className="active home-a">
            <button>Register</button>
          </Link>
        </li>
        <li className="home-li">
          <Link to="/log" className="active home-a">
            <button>Login</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
