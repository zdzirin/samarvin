import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown.js";

export default function Navbar(props) {
  return (
    <div className="navbar-container">
      <Link
        to="/"
        className="title"
        style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}
      >
        <h1 className="name">Sam Arvin</h1>
        <h4 className="main-text">Visual Media</h4>
      </Link>
      <div className="desktop links">
        <Link
          to="/collections"
          className="main-text"
          style={{ marginRight: "4em", textDecoration: "none" }}
        >
          Photo
        </Link>
        <Link
          to="/videos"
          className="main-text"
          style={{ textDecoration: "none" }}
        >
          Video
        </Link>
      </div>
      <Dropdown outerClassName="mobile">
        <div className="links">
          <Link
            to="/collections"
            className="main-text"
            style={{ marginTop: "12px", marginBottom: "20px" }}
          >
            Photo
          </Link>
          <Link
            to="/photos"
            className="main-text"
            style={{ marginBottom: "20px" }}
          >
            Video
          </Link>
        </div>
      </Dropdown>
    </div>
  );
}
