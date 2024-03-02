import React, { useState } from 'react';
import './EmployeeLogin.css';






const EmployeeLogin = () => {

  //validation



  const [eRegisterName, setEregisterName] = useState(false)
  const [eRegisterPhone, setEregisterPhone] = useState(false)
  const [eRegisterEmail, setEregisterEmail] = useState(false)
  const [eRegisterUser, setEregisterUser] = useState(false)
  const [eRegisterPsw, setEregisterPsw] = useState(false)











  //state

  const [eregister, setERegister] = useState({

    name: "",
  
    phone: "",
    email_address: "",
    username: "",
    password: ""

  })

  const seteLogin = (e) => {




    const { value, name } = e.target


if(name=='name')
{
if(value.match(/^[0-9A-Za-z]{6,16}$/))

{


  setEregisterName(false)
}
else{

  setEregisterName(true)

}
}


if(name=='phone'){

if(value.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/))
{

setEregisterPhone (false)

}
else
{
  setEregisterPhone(true)
}
}

if(name=='email_address'){

if(value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){

  setEregisterEmail(false)
}
else{
  setEregisterEmail(true)
}
}


if(name=='username')
{
  if(value.match(/^[0-9A-Za-z]{6,16}$/)){
    setEregisterUser(false)
  }
  else{
    setEregisterUser(true)
  }
}

if(name=='password')
{
  if(value.match(/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/))
  {
    setEregisterPsw(false)
  }
  else{
    setEregisterPsw(true)
  }
}

  setERegister({ ...eregister, [name]: value })
  }
  console.log(eregister);
  return (


    <div className=' s' >
      <div className="login-wrap mt-5">
        <div className="login-html">
          <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
          <label htmlFor="tab-1" className="tab">Sign In</label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">Sign Up</label>
          <div className="login-form">
            <div className="sign-in-htm">

              <div className="group">
                <label htmlFor="user" className="label">Username</label>
                <input id="use" name="username" onChange={(e) => seteLogin(e)} type="text" className="input" />
                {
                eRegisterUser && <p>Invalid UserName</p>
              }
              
  </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="passw" name="password" onChange={(e) => seteLogin(e)} type="password" className="input" data-type="password" />
                {

eRegisterPsw && <p>Invalid Password</p>
}
              </div>

              <div className="group">
                <input type="submit" className="button" value="Sign In" />
              </div>
              <div className="hr"></div>

            </div>
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="name" className="label">Name</label>
                <input id="namee" name="name" onChange={(e) => seteLogin(e)} type="text" className="input" />
             
             {
eRegisterName && <p>Invalid name</p>

             }
             
             
              </div>
            
              <div className="group">
                <label htmlFor="phn" className="label">Phone Number</label>
                <input id="phnn" name="phone" onChange={(e) => seteLogin(e)} type="tel" className="input" />
              {

eRegisterPhone &&
<p>Invalid Phone Number</p>

              }
              
              
              </div>
              <div className="group">
                <label htmlFor="email" className="label">Email</label>
                <input id="emaill" name="email_address" onChange={(e) => seteLogin(e)} type="email" className="input" />
             
             {
eRegisterEmail && <p>Invalid Email Id</p>

             }
             
             
              </div>
              <div className="group">
                <label htmlFor="user" className="label">Username</label>
                <input id="userr" name="username" onChange={(e) => seteLogin(e)} type="text" className="input" />
              
              {
                eRegisterUser && <p>Invalid UserName</p>
              }
              
              
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="psw" name="password" onChange={(e) => seteLogin(e)} type="password" className="input" data-type="password" />
              
              {

                eRegisterPsw && <p>Invalid Password</p>
              }
              
              </div>


              <div className="group">
                <input type="submit" className="button" value="Sign Up" />
              </div>
              <div className="hr"></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogin;
