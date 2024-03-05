import React from "react";
import './Expand.css';
function Expand(){
    return (<div className="blur-set expand-set" >
        <textarea 
            placeholder="Title" 
            cols="10" 
            rows="1"></textarea>
        <textarea 
            placeholder="Empty canvas, ready for your masterpieces" 
            cols="30" 
            rows="10"></textarea>
            <button>AA</button>
            <button>Ab</button>
    </div>);
}

export default Expand;