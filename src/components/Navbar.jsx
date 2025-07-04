import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <h3>DaffaPost</h3>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>

          <li>
            <Link to={"/posts"}>All Post</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
