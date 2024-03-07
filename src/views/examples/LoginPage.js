import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import { userLoginApi } from "views/Services/AllApis";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);

//validation

const[userValid,setUserValid]=useState(false)
const[passValid,setPassValid]=useState(false)

const navigate=useNavigate()
  const [uLogin, setULogin] = useState({

  
    username: "",
    password: ""

  })
  const setLogin = (e) => {




    const { value, name } = e.target


    if(name==='username')
    {
      if(value.match(/^[0-9A-Za-z]{6,16}$/)){
        setUserValid(false)
      }
      else{
        setUserValid(true)
      }
    }
    
    if(name==='password')
    {
      if(value.match(/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/))
      {
        setPassValid(false)
      }
      else{
        setPassValid(true)
      }
    }
    







    setULogin({ ...uLogin, [name]: value })
  }
  console.log(uLogin);



  const handleUserLogin=async(e)=>{

    e.preventDefault()
    const{username,password}=uLogin
    if(!username || !password){
      alert("please fill all datas")
    }
    else{
    //api
    const result= await userLoginApi(uLogin)
    console.log(result);
    
    if(result.status==200){
    setULogin({username:"",password:""})
    alert("Login Success!!")
    toast.success('Login Success!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    
      
     
      });
      navigate('/user-dashboard')
    
    }
    else{
      setULogin({username:"",password:""})
    
      toast.error(result.response.data.non_field_errors[0]  , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    
    
    }
    
    
    
    
    
    
    
    
    
    
    }
    
    












  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/images (10).jpeg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/img/now-logo.png")}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="UserName"
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        name="username" onChange={(e) => setLogin(e)}

                      ></Input>
                    </InputGroup>
                    <div>  

{
userValid && <p>Invalid UserName</p>

}</div>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
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
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                        name="password" onChange={(e) => setLogin(e)}
                      ></Input>
                    </InputGroup>

                    <div>  

{
passValid && <p>Invalid Password</p>

}</div>

                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => handleUserLogin(e)}
                      size="lg"
                    >
                      Login
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <a
                          className="link"
                          href="/sign-up"
                         
                        >
                          Don't you have an Account?
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link"
                          href="/sign-up"
                         
                        >
                          Create Now
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
        <ToastContainer />
      </div>
    </>
  );
}

export default LoginPage;
