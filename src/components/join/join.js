import SignUp from "../signup/signup";
import Login from "../login/login";
import { Link, Outlet } from "react-router-dom";

function Join() {
  return (
    <>
      <div>join us component</div>
      <Outlet />
     
    </>
  );
}

export default Join;
