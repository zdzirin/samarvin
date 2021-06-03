import React from "react";
import "./Navbar.css";

import { Link } from 'react-router-dom';
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
          to="/photos"
        >
          Photo
        </Link>
        <p className="main-text" style={{ marginRight: "4em" }}>
          Photo
        </p>
        <p className="main-text">Video</p>
      </div>
      <Dropdown outerClassName="mobile">
        <div className="links">
          <Link
            to="/photos"
            className="main-text"
            style={{ marginTop: "12px", marginBottom: "20px" }}
          >
            Photo
          </Link>
          <Link></Link>
          <p className="main-text" style={{ marginBottom: "20px" }}>
            Video
          </p>
        </div>
      </Dropdown>
    </div>
  );
}
