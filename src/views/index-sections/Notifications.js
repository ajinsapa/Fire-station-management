import React from "react";

// reactstrap components
import { Alert, Container } from "reactstrap";

// core components

function Notifications() {
  const [alert1, setAlert1] = React.useState(true);
  const [alert2, setAlert2] = React.useState(true);
  return (
    <>
      <div className="section section-notifications">
        <Alert color="success" isOpen={alert1}>
          <Container>
            <div className="alert-icon">
              <i className="now-ui-icons ui-2_like"></i>
            </div>
            <strong>"Stay informed</strong>  about our latest news and updates regarding fire safety, emergency preparedness, and community events."
            <button
              type="button"
              className="close"
              onClick={() => setAlert1(false)}
            >
              <span aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </span>
            </button>
          </Container>
        </Alert>
        <Alert color="info" isOpen={alert2}>
          <Container>
            <div className="alert-icon">
              <i className="now-ui-icons travel_info"></i>
            </div>
            <strong>"Sign up!</strong>  for our newsletter to stay connected with the incident status, create incidents, and important announcements from our fire station."
            <button
              type="button"
              className="close"
              onClick={() => setAlert2(false)}
            >
              <span aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </span>
            </button>
          </Container>
        </Alert>
      </div>
    </>
  );
}

export default Notifications;
