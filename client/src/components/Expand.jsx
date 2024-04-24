import { useState } from "react";
import closeSvg from "/assets/close_FILL0_wght400_GRAD0_opsz24.svg";
import doneSvg from "/assets/done_FILL0_wght400_GRAD0_opsz24.svg";

// eslint-disable-next-line react/prop-types
function Expand({ noteData, close }) {
  const [data, setData] = useState({
    heading: "",
    text: "",
  });
  function inputHandler(event) {
    setData({ ...data, [event.target.id]: event.target.value });
  }
  function pushData() {
    noteData(data);
    close();
  }
  return (
    <div className="blur-set expand-set">
      <textarea
        className="title-textarea"
        placeholder="Title"
        id="heading"
        cols="10"
        rows="1"
        name="heading"
        onChange={inputHandler}
        value={data.heading}
      ></textarea>
      <img
        className="close-btn"
        height={30}
        width={30}
        src={closeSvg}
        alt="close"
        onClick={close}
      />
      <textarea
        className="body-textarea"
        placeholder="Empty canvas, ready for your masterpieces"
        cols="30"
        rows="10"
        name="text"
        id="text"
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
