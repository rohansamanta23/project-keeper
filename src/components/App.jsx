import React, { useState } from "react";
import Header from './Header';
import Page from './Page';
import Note from './Note';
import Add from './Add';
function App(){
    const [loader,loadState] = useState(false);//swap form page to main contant

    function changeState(){
        loader?loadState(false):loadState(true);
    }

    return <>
        <Header/>
        {loader?<div className="notes-section">
            <Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/>
            <Add/>
        </div>
        :
            <Page load={changeState}/>
        }
    </>;
}
export default App;