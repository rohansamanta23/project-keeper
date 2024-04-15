import React, { useState } from "react";
import "./Expand.css";
import closeSvg from "../img/close_FILL0_wght400_GRAD0_opsz24.svg";
import doneSvg from "../img/done_FILL0_wght400_GRAD0_opsz24.svg";

function Expand(props) {
  const [data, setData] = useState({
    heading: "",
    text: "",
  });
  function inputHandler(event) {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }
  function pushData() {
    if (data.heading.trim() !== "" || data.text.trim() !== "") {
      props.data(data);
      setData({
        heading: "",
        text: "",
      });
      props.close();
    }
  }
  function titleHandler(event) {
    const nextTextarea = document.querySelector(".body-textarea");
    if (event.key === "Enter") {
      nextTextarea.focus();
      nextTextarea.select();
    }
  }

  return (
    <div className="blur-set expand-set">
      <input
        className="title-textarea note-entry"
        onKeyUp={titleHandler}
        placeholder="Title"
        cols="10"
        rows="1"
        name="heading"
        onChange={inputHandler}
        value={data.heading}
        required
      />
      <img
        className="close-btn"
        onClick={props.close}
        height={30}
        width={30}
        src={closeSvg}
        alt="close"
      />
      <textarea
        className="body-textarea note-entry"
        placeholder="Empty canvas, ready for your masterpieces"
        cols="30"
        rows="10"
        name="text"
        onChange={inputHandler}
        value={data.text}
      ></textarea>
      <button id="done-btn" onClick={pushData}>
        <img src={doneSvg} alt="" />
      </button>
    </div>
  );
}

export default Expand;
