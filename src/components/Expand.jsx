import React, { useState } from "react";
import "./Expand.css";
import closeSvg from "../img/close_FILL0_wght400_GRAD0_opsz24.svg";
import doneSvg from "../img/done_FILL0_wght400_GRAD0_opsz24.svg";

function Expand(props) {
  return (
    <div className="blur-set expand-set">
      <textarea className="title-textarea" placeholder="Title" cols="10" rows="1"></textarea>
      <img
        className="close-btn"
        onClick={props.close}
        height={30}
        width={30}
        src={closeSvg}
        alt="close"
      />
      <textarea
        className="body-textarea"
        placeholder="Empty canvas, ready for your masterpieces"
        cols="30"
        rows="10"
      ></textarea>
      <button id="done-btn">
        <img src={doneSvg} alt="" />
      </button>
    </div>
  );
}

export default Expand;
