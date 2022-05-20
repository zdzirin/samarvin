import React, { useState, useEffect } from "react";
import "./Dropdown.css";
import ExpandMore from "../../Images/expand_more-black-24dp.svg";

export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [innerHtml, setInnerHtml] = useState("");

  useEffect(() => {});

  return (
    <div className={`dropdown-container ${props.outerClassName}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ all: "unset", flexGrow: 0 }}
      >
        <img
          src={ExpandMore}
          alt="arrow to expand"
          style={{
            transform: isOpen ? "rotateX(180deg)" : "rotateX(0deg)",
            transition: "transform 0.3s",
            cursor: "pointer",
          }}
          width="36px"
          height="36px"
        ></img>
      </button>
      <div
        style={{
          position: "absolute",
          top: "30px",
          display: isOpen ? "block" : "none",
          transition: "display 0.2s",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
