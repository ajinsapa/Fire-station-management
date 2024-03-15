import React, { useState } from "react";
import "./EmployeeLogin.css";
import { employeeRegisterApi } from "views/Services/AllApis";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { employeeLoginApi } from "views/Services/AllApis";
import EmployeeNav from "./EmployeeNav";
import { useNavigate } from "react-router-dom";

const EmployeeLogin = () => {
  //validation

  const [eRegisterName, setEregisterName] = useState(false);
  const [eRegisterPhone, setEregisterPhone] = useState(false);
  const [eRegisterEmail, setEregisterEmail] = useState(false);
  const [eRegisterUser, setEregisterUser] = useState(false);
  const [eRegisterPsw, setEregisterPsw] = useState(false);

  //jsx

  const [isSignInActive, setIsSignInActive] = useState(true);
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const navigate=useNavigate()

  //state

  const [eregister, setERegister] = useState({
    name: "",

    phone: "",
    email_address: "",
    username: "",
    password: "",
  });

  const seteLogin = (e) => {
    const { value, name } = e.target;

    if (name === "name") {
      if (value.match(/^[0-9A-Za-z]{6,16}$/)) {
        setEregisterName(false);
      } else {
        setEregisterName(true);
      }
    }

    if (name === "phone") {
      if (value.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)) {
        setEregisterPhone(false);
      } else {
        setEregisterPhone(true);
      }
    }

    if (name === "email_address") {
      if (value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        setEregisterEmail(false);
      } else {
        setEregisterEmail(true);
      }
    }

    if (name === "username") {
      if (value.match(/^[0-9A-Za-z]{6,16}$/)) {
        setEregisterUser(false);
      } else {
        setEregisterUser(true);
      }
    }

    if (name == "password") {
      if (value.match(/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/)) {
        setEregisterPsw(false);
      } else {
        setEregisterPsw(true);
      }
    }

    setERegister({ ...eregister, [name]: value });
  };

  const handleEmployeeRegister = async (e) => {
    e.preventDefault();
    const { name, phone, email_address, username, password } = eregister;

    if (!name || !phone || !email_address || !username || !password) {
      alert("Please fill all datas ");
    } else {
      const result = await employeeRegisterApi(eregister);

      console.log(result);

      if (result.status == 200) {
        setERegister({
          name: "",
          phone: "",

          email_address: "",

          username: "",
          password: "",
        });

        toast.success(result.data.name + "Registered succesfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        setERegister({
          name: "",
          phone: "",

          email_address: "",

          username: "",
          password: "",
        });
        alert(result.response.data.email_address)
        toast.error(result.response.data.email_address, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  const handleEmployeeLogin = async (e) => {
    e.preventDefault();
    const { username, password } = eregister;
    if (!username || !password) {
      alert("please fill all datas");
    } else {
      //api call

      const result = await employeeLoginApi(eregister);
      console.log(result);
      if (result.status == 200) {
        setERegister({
          username: "",
          password: "",
        });

        toast.success("Login Success", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/employee-dash")

      } else {
        alert(result.response.data.non_field_errors[0]);
      }
    }
  };

  console.log(eregister);

  return (
    <div   className="body11" >
      <EmployeeNav></EmployeeNav>
      <div className=" s  text-white">
        <div className="login-wrap mt-5">
          <div className="login-html">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              defaultChecked
            />
            <label htmlFor="tab-1" className="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Username
                  </label>
                  <input
                    id="use"
                    value={eregister.username}
                    name="username"
                    onChange={(e) => seteLogin(e)}
                    type="text"
                    className="input"
                  />
                  {eRegisterUser && <p>Invalid UserName</p>}
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    id="passw"
                    value={eregister.password}
                    name="password"
                    onChange={(e) => seteLogin(e)}
                    type="password"
                    className="input"
                    data-type="password"
                  />
                  {eRegisterPsw && <p>Invalid Password</p>}
                </div>

                <div className="group">
                  <input
                    type="submit"
                    onClick={(e) => handleEmployeeLogin(e)}
                    className="button"
                    value="Sign In"
                    href="/employee-dash"
                  />
                </div>
                <div className="hr"></div>
              </div>
              <div className="sign-up-htm">
                <div className="group">
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                  <input
                    id="namee"
                    value={eregister.name}
                    name="name"
                    onChange={(e) => seteLogin(e)}
                    type="text"
                    className="input"
                  />

                  {eRegisterName && <p>Invalid name</p>}
                </div>

                <div className="group">
                  <label htmlFor="phn" className="label">
                    Phone Number
                  </label>
                  <input
                    id="phnn"
                    value={eregister.phone}
                    name="phone"
                    onChange={(e) => seteLogin(e)}
                    type="tel"
                    className="input"
                  />
                  {eRegisterPhone && <p>Invalid Phone Number</p>}
                </div>
                <div className="group">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    id="emaill"
                    value={eregister.email_address}
                    name="email_address"
                    onChange={(e) => seteLogin(e)}
                    type="email"
                    className="input"
                  />

                  {eRegisterEmail && <p>Invalid Email Id</p>}
                </div>
                <div className="group">
                  <label htmlFor="user" className="label">
                    Username
                  </label>
                  <input
                    id="userr"
                    value={eregister.username}
                    name="username"
                    onChange={(e) => seteLogin(e)}
                    type="text"
                    className="input"
                  />

                  {eRegisterUser && <p>Invalid UserName</p>}
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    id="psw"
                    name="password"
                    value={eregister.password}
                    onChange={(e) => seteLogin(e)}
                    type="password"
                    className="input"
                    data-type="password"
                  />

                  {eRegisterPsw && <p>Invalid Password</p>}
                </div>

                <div className="group">
                  <input
                    type="submit"
                    className="button"
                    onClick={(e) => handleEmployeeRegister(e)}
                    value="Sign Up"
                  />
                </div>
                <div className="hr"></div>
              </div>
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
}

export default EmployeeLogin;






