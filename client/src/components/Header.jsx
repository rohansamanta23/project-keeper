import React from "react";
import logo from '../img/paper-clip-svgrepo-com.png';
function Header(){
    return (<header>
        <img width={40} src={logo} alt="logo" />
        <h1>Keeper</h1>
    </header>);
}
export default Header;