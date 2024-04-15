import React, { useState } from "react";
import closeSvg from "/assets/close_FILL0_wght400_GRAD0_opsz24.svg";
import doneSvg from "/assets/done_FILL0_wght400_GRAD0_opsz24.svg";

function Expand(props) {
  const [data,setData] = useState({
    heading:"",
    text:""
  });
  function inputHandler(event){
    const {name,value} = event.target;
    setData(preVal=>{
      return{
        ...preVal,
        [name]: value
      };
    });
  }
  function pushData(){
    props.data(data);
    setData({
      heading:"",
      text:""
    });
    props.close();
  }
  return (
    <div className="blur-set expand-set">
      <textarea 
        className="title-textarea" 
        placeholder="Title" 
        cols="10" 
        rows="1"
        name="heading"
        onChange={inputHandler}
        value={data.heading}
      ></textarea>
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
        name="text"
        onChange={inputHandler}
        value={data.text}
      ></textarea>
      <button id="done-btn" onClick={pushData} >
        <img src={doneSvg} alt="" />
      </button>
    </div>
  );
}

export default Expand;