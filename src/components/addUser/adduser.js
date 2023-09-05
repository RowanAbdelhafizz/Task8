import { useState } from "react";

function AddUser() {
  const [UserData, setUserData] = useState({
    name: "",
    email: "",
  });
  // const [UserData, setUserData] = useState({
  //   userName: "",
  //   userEmail: "",
  // });
  const [errorData, setErrorData] = useState({
    userNameError: "",
    userEmailError: "",
  });

  const handelChange = (eventData) => {
    if (eventData.target.name == "userName") {
      setUserData({ ...UserData, name: eventData.target.value });
      setErrorData({
        ...errorData,
        userNameError:
          eventData.target.value.length == 0
            ? "UserName is Required"
            : eventData.target.value.length < 3
            ? "UserName should at least 3 characters"
            : "",
      });
    } else if (eventData.target.name == "userEmail") {
      setUserData({ ...UserData, email: eventData.target.value });

      setErrorData({
        ...errorData,
        userEmailError:
          eventData.target.value.length == 0
            ? "Email is Required"
            : eventData.target.value.includes("@")
            ? ""
            : "Email must include @",
      });
    }

    // switch (eventData.target.name) {
    //   case "userName":
    //     setUserData({ ...UserData, name: eventData.target.value });
    //     break;
    //   case "userEmail":
    //     setUserData({ ...UserData, email: eventData.target.value });
    //     break;
    //    default:
    //     return;
    // }

    // setUserData({ ...UserData, [eventData.target.name]: eventData.target.value });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={(e) => handelSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputUserName" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className={`form-control ${
              errorData.userNameError != "" ? "border-danger" : ""
            } `}
            id="exampleInputUserName"
            name="userName"
            value={UserData.name}
            onChange={(e) => {
              handelChange(e);
            }}
          />
          <div className="form-text text-danger">{errorData.userNameError}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="userEmail"
            value={UserData.email}
            onChange={(e) => {
              handelChange(e);
            }}
          />
          <div className="form-text text-danger">
            {errorData.userEmailError}
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={
            errorData.userEmailError == "" && errorData.userNameError == ""
              ? true
              : false
          }
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default AddUser;
