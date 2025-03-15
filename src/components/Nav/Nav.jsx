import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import logo from "../../assets/Logo.jpg";
import account from "../../assets/ac2.png";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <img src={logo} alt="" />
      </div>
      <ul>
        <li>
          <NavLink to="/">Ana səhifə</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/search">Axtar</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/add">Əlavə et</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/news">Xəbərlər</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/blog">Bloq</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/register"><img src={account} alt="" />Sign in</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;


