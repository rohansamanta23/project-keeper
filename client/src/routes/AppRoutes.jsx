import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Add from "../components/Add";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Add />,
      },
    ],
  },
  {
    path: "/home",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
]);
