/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
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
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/slider_firenew.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img>
            <h1 className="h1-seo "><b> Nova Fire And Rescue Services </b></h1>
            <h3> Fire Feeds On Careless Deeds...
WE’RE HERE FOR U</h3>
          </div>
          <h6 className="category category-absolute">
            Designed by
              <img
              style={{width:'20px'}}
                alt="..."
                className="invision-logo"
                src={require("assets/img/now-logo.png")}
              ></img>
           
            .
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
