import React, { useEffect, useState } from "react";
import logo from "../img/paper-clip-svgrepo-com.png";

function SignUp(props) {
  const [login, changeVal] = useState(true); //swapping login with sign in
  const [details, setDetails] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    fetch(process.env.BACKEND_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function changeHandler(event) {
    const { name, value } = event.target;
    setDetails((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }

  function swapPage() {
    setDetails((preVal) => {
      return {
        ...preVal,
        password: "",
        confirmPassword: "",
      };
    });
    login ? changeVal(false) : changeVal(true);
  }
  return (
    <section id="main">
      <img width={100} height={100} src={logo} alt="logo" />
      <h2>{login ? "Log in" : "Sign up"}</h2>
      <div className="input-set">
        {!login && (
          <input
            name="userName"
            type="text"
            placeholder="Username"
            onChange={changeHandler}
            value={details.userName}
            required
          />
        )}
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
        {!login && (
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={details.confirmPassword}
            required
          />
        )}
      </div>
      <div className="btn-div">
        <p>
          {login ? "Don't have an account? " : "Have an account? "}
          <span onClick={swapPage} className="swap-btn">
            {login ? "Sign up" : "Log in"}
          </span>
        </p>
        <button onClick={props.load} type="submit" id="set-data">
          {login ? "Log in" : "Sign up"}
        </button>
      </div>
    </section>
  );
}
export default SignUp;
