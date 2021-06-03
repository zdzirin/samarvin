import React from 'react';
import './Footer.css'

import InstagramLight from '../../Images/instagram_light.svg';
import Instagram from '../../Images/instagram.svg'

export default function(props) {


    return (
      <div className="footer">
        <a
          className="instagram-container"
          target="_href"
          href="https://www.instagram.com/smarvin111/?hl=en"
        >
          <img
            className="logo"
            src={props.subpage ? Instagram : InstagramLight}
            alt="instagram logo icon"
          />
          <p
            className="main-text instagram-text"
            style={{ color: props.subpage ? "#313113" : "#F3F6FB" }}
          >
            @smarvin111
          </p>
        </a>
      </div>
    );
}


