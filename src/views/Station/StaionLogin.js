import React, { useState } from 'react'




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


function StaionLogin() {
  
  
  //validation

  const[logUsername,setLogUserName]=useState(false)
const[logPassword,setlogPassword]=useState(false)




//state

const[stationLogin,setStationLogin]=useState({

username:"",
password:""

})



const setLoginDatas=(e)=>{


  const{value,name}=e.target


if(name=='username')
{

if(value.match(/^[0-9A-Za-z]{6,16}$/)){

setLogUserName(false)

}
else{

setLogUserName(true)

}
}

if(name=='password'){

if(value.match(/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/))
{
  setlogPassword(false)
}
else
{
setlogPassword(true)

}
}





  setStationLogin({...stationLogin,[name]:value})
}

console.log(stationLogin);





        const [firstFocus, setFirstFocus] = React.useState(false);
        const [lastFocus, setLastFocus] = React.useState(false);
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
    <div>
              <ExamplesNavbar />
              <div>

             
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/kerala-fire-force-vehicle-2-1681121440.jpg") + ")"
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
                        name="username"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange={(e)=>setLoginDatas(e)}
                      ></Input>
                    </InputGroup>
                    <div>

{
logUsername&& <p>Invalid UserName</p>

}


                    </div>
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
                        name="password"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                        onChange={(e)=>setLoginDatas(e)}
                      ></Input>
                    </InputGroup>
                    <div>
{
logPassword && <p>Invalid Password</p>

}



                    </div>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="warning"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      Login
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <a
                          className="link"
                          href="/station-signup"
                         
                        >
                          Don't you have an Account?
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link"
                          href="/station-signup"
                         
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
      </div>
      </div>
    </div>
  )
}

export default StaionLogin