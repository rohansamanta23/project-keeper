import { useState } from "react";
import Expand from "./Expand";
import Notes from "./Note";

function Add() {
  const [create, createState] = useState(false);

  const [notes, setNotes] = useState([]);

  function btnClick() {
    create ? createState(false) : createState(true);
  }
  function createNotes(obj) {
    setNotes([...notes, obj]);
  }
  return (
    <>
      <div className="notes-section">
        {notes.length !== 0 ? (
          notes.map((note, key) => {
            return <Notes heading={note.heading} text={note.text} key={key} />;
          })
        ) : (
          <h2 className="empty-msg">
            Empty canvas, ready for your masterpieces
          </h2>
        )}
      </div>
      {!create && (
        <button className="cteate-notes" onClick={btnClick}>
          +
        </button>
      )}
      {create && <Expand close={btnClick} noteData={createNotes} />}
    </>
  );
}
export default Add;
