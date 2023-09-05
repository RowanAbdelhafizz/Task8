import React, { useEffect, useState } from "react";
import "./user.css";
function UserFunctional() {
  //  state,stateModifier
  //state

  const [counter, setCounter] = useState(10);
  const [Users, setUsers] = useState([
    { email: "user1@gmail.com", name: "ali", isActive: true },
    { email: "user2@gmail.com", name: "ramy", isActive: false },
    { email: "user3@gmail.com", name: "ola", isActive: true },
    { email: "user4@gmail.com", name: "mohamed", isActive: false },
  ]);
  const [isAuth, setAuth] = useState(false);
  const changeVal = () => {
    setCounter(20);
  };
  const logout = () => {
    setAuth(!isAuth);
  };
  //useEffect
  useEffect(() => {
    //mounting
    console.log("mounting Phase");
    //WillUnmount
    return () => {
      //unmounting
      //clean up
      console.log("data");
    };
  }, []);

  useEffect(() => {
    //update
    //called when isAuth is taking initial value or updating
    console.log("updating Phase");
  }, [isAuth, counter]);

  return (
    <>
      <h1>{counter}</h1>
      <button className="btn btn-success" onClick={changeVal}>
        changeval
      </button>
      {isAuth ? (
        <ul className="userUl">
          {Users.map((user) => {
            return <li>{user.name}</li>;
          })}
        </ul>
      ) : (
        <h3>Login First</h3>
      )}
      <button className="btn btn-success" onClick={logout}>
        Logout
      </button>
    </>
  );
}

export default UserFunctional;
