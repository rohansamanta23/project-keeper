import React, { useState } from "react";
import Header from './Header';
import Page from './Page';
import Note from './Note';

function App(){
    var [loader,loadState] = useState(false);

    function changeState(){
        loader?loadState(false):loadState(true);
    }

    return <>
        <Header/>
        {loader?<div className="notes-section">
            <Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/>
        </div>
        :<Page/>}
        
    </>;
}
export default App;