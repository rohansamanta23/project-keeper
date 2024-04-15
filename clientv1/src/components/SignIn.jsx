import React, { useState } from "react";
import logo from "/assets/paper-clip-svgrepo-com.png";

function SignUp(props) {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setDetails((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }

  return (
    <section id="main">
      <img width={100} height={100} src={logo} alt="logo" />
      <h2>Sign in</h2>
      <div className="input-set">
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={changeHandler}
          value={details.email}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={changeHandler}
          value={details.password}
          required
        />
      </div>
      <div className="btn-div">
        <p>
          Don't have an account?
          <span onClick={props.swap} className="swap-btn">Sign up</span>
        </p>
        <button onClick={props.load} type="submit" id="set-data">
          Sign in
        </button>
      </div>
    </section>
  );
}
export default SignUp;
