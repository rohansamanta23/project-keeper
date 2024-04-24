import { useState } from "react";
import logo from "/assets/paper-clip-svgrepo-com.png";
import { Link, Navigate } from "react-router-dom";
import { validation } from "../utils/validation";
import Cookies from "js-cookie";

function SignIn() {
  const token = Cookies.get("user_auth_token");
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  function changeHandler(event) {
    setDetails({ ...details, [event.target.id]: event.target.value });
    setErrors({});
  }

  function userDetailsSubmit() {
    setErrors({
      ...errors,
      email: validation(details.email, "email"),
      password: validation(details.password, "password"),
    });
  }
  if (token) {
    return <Navigate to="/home" replace />;
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
          id="email"
          onChange={changeHandler}
          value={details.email}
          required
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          name="password"
          type="password"
          placeholder="Password"
          id="password"
          onChange={changeHandler}
          value={details.password}
          required
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div className="btn-div">
        <p>
          Have an account?
          <Link to={"/signup"}>Sign Up</Link>
        </p>
        <button onClick={userDetailsSubmit} type="submit" id="set-data">
          Sign in
        </button>
      </div>
    </section>
  );
}
export default SignIn;
