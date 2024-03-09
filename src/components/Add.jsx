import React, { useState } from "react";
import Expand from "./Expand";
import "./Add.css";

function Add(props) {
  const [create, createState] = useState(false);

  function btnClick() {
    create ? createState(false) : createState(true);
  }
  return (
    <>
      {!create && (
        <button className="cteate-notes" onClick={btnClick}>
          +
        </button>
      )}
      {create && <Expand close={btnClick} data={props.data} />}
    </>
  );
}
export default Add;
