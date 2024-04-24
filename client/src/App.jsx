import Header from "./components/Header";
import Cookies from "js-cookie";

import { Navigate, Outlet } from "react-router-dom";
function App() {
  const token = Cookies.get("user_auth_token");
  console.log(token);

  if (!token) {
    return <Navigate to="/signup" replace />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default App;
