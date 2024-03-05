import React, { useState } from "react";
import Header from './Header';
import Page from './Page';
import Note from './Note';
import Add from './Add';
function App(){
    const [loader,loadState] = useState(true);//swap form page is main contant

    function changeState(){
        loader?loadState(false):loadState(true);
    }

    return <>
        <Header/>
        {loader?<div className="notes-section">
            <Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/>
            <Add/>
        </div>
        :
            <Page/>
        }
    </>;
}
export default App;