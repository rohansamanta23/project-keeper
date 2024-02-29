import React,{useState} from "react";
import logo from '../img/paper-clip-svgrepo-com.png';

function Page() {

    var [login,changeVal] = useState(true);

    function swapPage(){
        document.getElementById('password').value = '';
        login?changeVal(false):changeVal(true);
    }
    return (<section id="main">
        <img width={100} height={100} src={logo} alt="logo" />
        <h2>{login?"Log in":"Sign up"}</h2>
        <div className="input-set">
        {!login&&<input type="text" placeholder="Username" required />}
        <input  type="email" placeholder="Email"  required />
        <input  type="password" placeholder="Password" id="password" required />
        {!login&&<input  type="password" placeholder="Confirm Password" required />}
        </div>
        <div className="btn-div">
            <p>{login?"Don't have an account? ":"Have an account? "}
            <span onClick={swapPage} className="swap-btn">{login?"Sign up":"Log in"}</span>
            </p>
            <button type="submit" id="set-data">{login?"Log in":"Sign up"}</button>
        </div>
        
    </section>);
}
export default Page;