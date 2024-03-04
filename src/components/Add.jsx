import React, { useState } from "react";
function Add(){
    var [create,createState] = useState(false);
    function btnClick(){
        createState(true);
    }
    return (
        <>
        {!create&&<button className="cteate-notes" onClick={btnClick}>+</button>}
        {!create&& <div>
            <input type="text" />
            <input type="text" />
        </div> }
        </>
        
    );
}
export default Add;