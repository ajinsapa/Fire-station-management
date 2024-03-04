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
import { stationRegisterApi } from 'views/Services/AllApis';
import { useNavigate } from 'react-router-dom';






function StationSignUp() {


const navigate=useNavigate()






//validation

const[snameValid,setSnameValid]=useState(false)
const [slocation,setSLocation]=useState(false)
const [semail,setSEmail]=useState(false)
const[sPhone,setSPhone]=useState(false)
const [sname,setSName]=useState(false)
const [spassword,setSPassword]=useState(false)
  //store data
  const[station,setStation]=useState({
    name:"",
    location:"",
    email_address:"",
    phone:"",
    username:"",
    password:""
   
   })
   
const setDatas=(e)=>{

  const {value,name}=e.target
  if(name=='name'){
if(value.match(/^[a-zA-Z *]+$/)){

 setSnameValid(false)
}
else{
  setSnameValid(true)
}

  }

if(name=='location'){

if(value.match(/^[a-zA-Z ,]+$/)){

setSLocation(false)

}
else{
  setSLocation(true)
}

}


if(name=='email_address'){
  if(value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
setSEmail(false)

  }
  else{
    setSEmail(true)
  }
}


if(name=='phone')
{
  if (value.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)){
    setSPhone(false)
  }
  else{
    setSPhone(true)
  }
}

if(name=='username'){

if(value.match(/^[0-9A-Za-z]{6,16}$/)){

  setSName(false)
}

else{

  setSName(true)
}

}


if(name=='password')
{

if(value.match(/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/))
{
  setSPassword(false)
}
else{
  setSPassword(true)
}

}


  setStation({...station,[name]:value})
}

  const handleStationRegister=async(e)=>{

e.preventDefault()
const{name,location,email_address,phone,username,password}=station

if(!name || !location || ! email_address|| !phone|| !username||!password)

{
  alert("Please fill All Datas")
}
else{

const result=await stationRegisterApi(station)
console.log(result);

if(result.status==200){ 
alert(result.data.name +`Registered Successfully`)
setStation({name:"",
location:"",
email_address:"",
phone:"",
username:"",
password:""})

navigate('/station-login')
}
else{


alert(result.response.username  )



}





}

  }







console.log(station);



    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const [emailFocus] = React.useState(false);

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
  backgroundImage: "url(" + require("assets/img/fire-noc-kerala-exsecop.jpg") + ")"
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
                      "no-border" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input  name="name"
                      placeholder=" Name"
                      value={station.name}
                      type="text"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                      onChange={(e)=>setDatas(e)}
                      
                    ></Input> 
                    
                     
                    
                  </InputGroup>
                  {
                    snameValid&&  <p>Name  is Invalid</p>
                  }
                  
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
                      value={station.location}
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                      onChange={(e)=>setDatas(e)}
                    ></Input>
                  </InputGroup>
                  <div>

                    {
slocation && <p>Invalid Location</p>

                    }
                  </div>
                  <InputGroup
                    className={
                      "no-border" + (emailFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      <i class="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="E-mail Address"
                      type="email"
                      value={station.email_address}
                      name="email_address"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                      onChange={(e)=>setDatas(e)}
                    ></Input>
                  </InputGroup>
                  <div>

{
  semail && 
  <p>Invalid E-mail Id</p>
}


                  </div>
                  <InputGroup
                    className={
                      "no-border" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className= "fa-solid fa-phone"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Phone Number"
                      type="tel"
                      name="phone"
                      value={station.phone}
                      onChange={(e)=>setDatas(e)}
                    ></Input>
                  </InputGroup>
<div>
{
sPhone && <p>Invalid Number</p>

}


</div>
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
              value={station.username}
              onFocus={() => setFirstFocus(true)}
              onBlur={() => setFirstFocus(false)}
              onChange={(e)=>setDatas(e)}
            ></Input>
          </InputGroup>
          <div>
{
sname && <p>Invalid UserName</p>

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
              value={station.password}
              onFocus={() => setLastFocus(true)}
              onBlur={() => setLastFocus(false)}
              onChange={(e)=>setDatas(e)}
            ></Input>
          </InputGroup>
          <div>

{


  spassword&& <p>Invalid Password</p>
}


          </div>
        </CardBody>
        <CardFooter className="text-center">
          <Button
            block
            className="btn-round"
            color="warning"
         
            onClick={(e) => handleStationRegister(e)}
            size="lg"
          >
            Sign Up
          </Button>
          <div className="pull-left ">
           
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

export default StationSignUp