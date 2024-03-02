import React from "react";

// reactstrap components
import {  Container } from "reactstrap";

// core components

function LandingPageHeader() {
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
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/firefighter-in-foreground-with-burning-buildings-in-background-safety-fire-fighter-team-department-fireman-in-special-heat-resistant-protecti.jpeg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">About Nova</h1>
            <div className="text-center">
              
               
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
