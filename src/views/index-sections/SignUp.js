import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";
import { userRegisterApi } from "views/Services/AllApis";

// core components

function SignUp() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);

const navigate=useNavigate()
  //validation

  const[uname,setUname]=useState(false)
  const[ulocation,setLocation]=useState(false)
  const[uphone,setPhone]=useState(false)
  const[uemail,setEmail]=useState(false)
  const[uusername,setUsername]=useState(false)
  const[upassword,setPassword]=useState(false)

//state to store data


const[userRegister,setUserRegister]=useState({


  name:"",
  location:"",
  phone:"",
  email_address:"",
  username:"",
  password:""




})


const setSignUp=(e)=>{

const{value,name}=e.target

if(name=='name'){

if(value.match(/^[a-zA-Z *]+$/)){
  setUname(false)
}
else{
  setUname(true)
}

}

if(name=='location'){

  if(value.match(/^[a-zA-Z]+$/)){
    setLocation(false)
  }
  else{
   
  setLocation(true)
  }
  
  }

  if(name=='phone'){

    if(value.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)){
      setPhone(false)
    }
    else{
      setPhone(true)
    }
    
    }

    if(name=='email_address'){

      if(value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        setEmail(false)
      }
      else{
        setEmail(true)
      }
      
      }

      if(name=='username'){

        if(value.match(/^[0-9A-Za-z]{6,16}$/)){
          setUsername(false)
        }
        else{
          setUsername(true)
        }
        
        }
        if(name=='password'){

          if(value.match(/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/)){
            setPassword(false)
          }
          else{
            setPassword(true)
          }
          
          }

setUserRegister({...userRegister,[name]:value})


}

console.log(userRegister);


const handleUserRegister=async(e)=>{

  e.preventDefault()
  const{name,location,email_address,phone,username,password}=userRegister
  
  if(!name || !location || !phone ||! email_address|| !username||!password)
  
  {
    alert("Please fill All Datas")
  }
  else{
  
  const result=await userRegisterApi(userRegister)
  console.log(result);
  
  if(result.status==200){ 
  setUserRegister({name:"",
  location:"",
  phone:"",
  email_address:"",
  
  username:"",
  password:""})

  toast.success(result.data.name+'Registered Successfully', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });



  
  navigate('/login-page')
  }
  else{
  
  
  alert(result.response.username  )
  
  
  
  }
  
  
  
  
  
  }
  
    }
  
  
  






  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/London-Fire-Brigade-5.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px"
        }}
      >
        <Container>
          <Row>
            <Card className="card-signup" data-background-color="blue">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    Sign Up
                  </CardTitle>
                  <div className="social-line">
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="facebook"
                      href=""
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="twitter"
                      href=""
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="google"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                  </div>
                </CardHeader>
                <CardBody>
                  <InputGroup
                    className={
                      "no-border" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder=" Name"
                      type="text"
                      name="name"
                      value={userRegister.name}
                      onChange={(e)=>setSignUp(e)}
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>

                  <div>



                    {

uname && <p>Invalid Name</p>

                    }
                  </div>
                  <InputGroup
                    className={
                      "no-border" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      <i class="fa-solid fa-location-crosshairs"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder=" Location"
                      type="text"
                      name="location"
                      value={userRegister.location}

                      onChange={(e)=>setSignUp(e)}
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                 
                 
                 
             </InputGroup>
             <div>



{

ulocation && <p>Invalid Location</p>

}
</div>
             
                  <InputGroup
                    className={
                      "no-border" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      <i class="fa-solid fa-phone"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder=" PhoneNumber"
                      type="tel"
                      name="phone"
                      value={userRegister.phone}

                      onChange={(e)=>setSignUp(e)}
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>

                  <div>



{

uphone && <p>Invalid Number</p>

}
</div>
                  <InputGroup
                    className={
                      "no-border" + (emailFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email..."
                      type="email"
                      name="email_address"
                      value={userRegister.email_address}

                      onChange={(e)=>setSignUp(e)}
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    ></Input>
                  </InputGroup>

                  <div>



{

uemail && <p>Invalid Email Address</p>

}
</div>


                  <InputGroup
                    className={
                      "no-border" + (lastFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      <i class="fa-solid fa-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="UserName"
                      type="text"
                      name="username"
                      value={userRegister.username}

                      onChange={(e)=>setSignUp(e)}
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                    ></Input>
                  </InputGroup>

                  <div>



{

uusername && <p>Invalid UserName</p>

}
</div>

                  <InputGroup
                    className={
                      "no-border" + (lastFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      <i class="fa-solid fa-key"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={userRegister.password}

                      onChange={(e)=>setSignUp(e)}
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                    ></Input>
                  </InputGroup> <div>



{

upassword && <p>Invalid password</p>

}
</div>
                 
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    onClick={(e)=>handleUserRegister(e)}
                    
                    size="lg"
                  >
                    Sign Up
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
          
        </Container>
        <ToastContainer />
      </div>
    </>
  );
}

export default SignUp;
