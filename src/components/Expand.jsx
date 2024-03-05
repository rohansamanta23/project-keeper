import React, { useState } from "react";
import './Expand.css';
import svg from '../img/close_FILL0_wght400_GRAD0_opsz24.svg';
function Expand(props){
    return (<div className="blur-set expand-set" >
            <textarea 
                placeholder="Title" 
                cols="10" 
                rows="1">
            </textarea>
            <img className="close-btn" onClick={props.close} height={30} width={30} src={svg} alt="close" />
            <textarea 
                placeholder="Empty canvas, ready for your masterpieces" 
                cols="30" 
                rows="10">
            </textarea>
            <button>done</button>
    </div>);
}

export default Expand;