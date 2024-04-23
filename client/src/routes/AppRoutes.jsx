import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Cookies from "js-cookie";

// ?is logged in
const token = Cookies.get("use_auth_token");

console.log(token);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: token ? <h1>LoggedIn</h1> : <Navigate to={"SignUp"} replace />,
      },
      {
        path: "signup",
        element: token ? <Navigate to="/" /> : <SignUp />,
      },
      {
        path: "signin",
        element: token ? <Navigate to="/" /> : <SignIn />,
      },
    ],
  },
]);
