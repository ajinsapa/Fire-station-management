/*eslint-disable*/
import React from "react";



// reactstrap components
import ContactUsNav from "./ContactUsNav";
import { Container } from "reactstrap";
// core components

function ContactUsHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
    <ContactUsNav></ContactUsNav>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/kerala-fire-force-vehicle-cover-1681121386.jpg") + ")"
          }}
          ref={pageHeader}
        >


<Container>

<div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img>
            <h1 className="h1-seo "><b> Nova Fire And Rescue Services </b> 
            <br />
            
            <h6  style={{color:'red',backgroundColor:'white'}}  >Contact Details</h6>
            
            </h1>
            <div  style={{backgroundColor:'lightgrey',color:'red'}} >

            <ul>
        <strong>Address:</strong> Nova Fire and Rescue Services,Kochi,Ernakulam <br />
        <strong>Phone:</strong> 9056823485 <br />
        <strong>Email:</strong> nova@fireandrescue.com <br />
        <strong>Emergency:</strong> 0120
      </ul>






            </div>
            
          </div>
          





</Container>














        </div>
        

        




      </div>





      
    </>
  );
}

export default ContactUsHeader;

