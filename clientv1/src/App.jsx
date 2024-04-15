import React, { useState } from "react";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Note from "./components/Note";
import Add from "./components/Add";
function App() {
  const [loader, loadState] = useState(false); //swap form page to main contant
  const [isSignUp, setSignIUp] = useState(false);
  const [notes, setNotes] = useState([]);
  function changeState() {
    loader ? loadState(false) : loadState(true);
  }
  function handelSignPage() {
    isSignUp ? setSignIUp(false) : setSignIUp(true);
  }
  function createNotes(obj) {
    setNotes((preVal) => {
      return [...preVal, obj];
    });
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
      ) : isSignUp ? (
        <SignIn swap={handelSignPage} load={changeState} />
      ) : (
        <SignUp swap={handelSignPage} load={changeState} />
      )}
    </>
  );
}
export default App;
