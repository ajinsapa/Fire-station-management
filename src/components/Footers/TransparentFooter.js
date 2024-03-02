/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="/index"
                target="_blank"
              >
               Nova Fire and Rescue Services
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
              >
                About Us
              </a>
            </li>
            
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="/index"
            target="_blank"
          >
            Nova Fire and Rescue Services
          </a>
          . Coded by{" "}
          <a
            href="/index"
            target="_blank"
          >
           Nova
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
