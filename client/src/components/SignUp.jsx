import { useState } from "react";
import logo from "/assets/paper-clip-svgrepo-com.png";
import { Link, useNavigate } from "react-router-dom";
import { validation } from "../utils/validation";
import Cookies from "js-cookie";

function SignUp() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const navigate = useNavigate();

  function changeHandler(event) {
    setDetails({ ...details, [event.target.id]: event.target.value });
    setErrors({
      ...errors,
      name: validation(details.name, "name"),
      email: validation(details.email, "email"),
      password: validation(details.password, "password"),
      confirm_password: validation(
        details.confirm_password,
        "confirm password"
      ),
    });
  }
  function hasEmptyErrors(errors) {
    return Object.values(errors).every((error) => error === null);
  }

  function userDetailsSubmit() {
    setErrors({
      ...errors,
      name: validation(details.name, "name"),
      email: validation(details.email, "email"),
      password: validation(details.password, "password"),
      confirm_password: validation(
        details.confirm_password,
        "confirm password"
      ),
    });
    console.log(hasEmptyErrors(errors), "----errr");
    if (hasEmptyErrors(errors)) {
      userCreate();
      console.log("Submitting form data...");
    }
  }

  const userCreate = async () => {
    const userData = { ...details };
    const res = await fetch("http://localhost:5450" + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    console.log(data?.data?.token);
    Cookies.set("use_auth_token", data?.data?.token, { expires: 7 });
    navigate("/home");
  };

  return (
    <section id="main">
      <img width={100} height={100} src={logo} alt="logo" />
      <h2>Sign up</h2>
      <div className="input-set">
        <input
          name="userName"
          id="name"
          type="text"
          placeholder="Username*"
          onChange={changeHandler}
          value={details.userName}
          required
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          name="email"
          type="email"
          id="email"
          placeholder="Email*"
          onChange={changeHandler}
          value={details.email}
          required
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          name="password"
          type="password"
          id="password"
          placeholder="Password*"
          onChange={changeHandler}
          value={details.password}
          required
        />
        {errors.password && <p>{errors.password}</p>}
        <input
          name="confirmPassword"
          type="password"
          id="confirm_password"
          placeholder="Confirm Password*"
          onChange={changeHandler}
          value={details.confirm_password}
          required
        />
        {errors.confirm_password && <p>{errors.confirm_password}</p>}
      </div>
      <div className="btn-div">
        <p>
          Have an account?
          <Link to={"/signin"}>Sign In</Link>
        </p>
        <button onClick={userDetailsSubmit} type="submit" id="set-data">
          Sign up
        </button>
      </div>
    </section>
  );
}
export default SignUp;
