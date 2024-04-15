import React, { useState } from "react";
import Header from "./Header";
import SignUp from "./SignUp";
import Note from "./Note";
import Add from "./Add";
function App() {
  const [loader, loadState] = useState(false); //swap form page to main contant
  const [notes, setNotes] = useState([]);
  function changeState() {
    loader ? loadState(false) : loadState(true);
  }
  function createNotes(obj) {
    setNotes((preVal) => [...preVal, obj]);
  }
  return (
    <>
      <Header />
      {loader ? (
        <div className="notes-section">
          {notes.length !== 0 ? (
            notes.map((val, key) => {
              return <Note content={val} key={key} />;
            })
          ) : (
            <h2 className="empty-msg">
              Empty canvas, ready for your masterpieces
            </h2>
          )}
          <Add data={createNotes} />
        </div>
      ) : (
        <SignUp load={changeState} />
      )}
    </>
  );
}
export default App;
