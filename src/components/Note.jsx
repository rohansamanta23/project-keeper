import React from "react";
import './Note.css';
function Notes(props){
    const {heading,text} = props.content;
    return (<div className="note-set">
        <h3 className="note-heading">{heading}</h3>
        <p className="note-content">{text}</p>
    </div>);
}

export default Notes;