import React, { useState } from "react";
import Add from "./Add";
import "./Note.css";
function Notes(props) {
  const { heading, text } = props.content;
  const [isClicked, setIsClicked] = useState(false);

  function clicked() {}
  return (
    <div className="note-set" onClick={clicked}>
      <h3 className="note-heading">{heading}</h3>
      <p className="note-content">{text}</p>
      <Add />
    </div>
  );
}

export default Notes;
