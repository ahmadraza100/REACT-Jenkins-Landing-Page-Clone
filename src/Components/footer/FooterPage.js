import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../../App.css"

function FooterPage(){          
  return (
    <MDBFooter style={{backgroundColor:"blue"}} color="white" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left" color="white">
        <MDBRow>
          <div className="row">
            <MDBCol XS={4}></MDBCol>
          <MDBCol  >
            <h5 className="title"><a  style={{color:"white"  ,textDecoration:"none" }} href="https://www.instagram.com.iam_ahmademi">Improve This Page</a></h5>
            <p >
            The content driving this site is licensed under the Creative Commons Attribution-ShareAlike 4.0 license.
            </p>
          </MDBCol>
          <MDBCol  >
            <h5 className="title">Resources</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Downloads</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Blog</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Documentation</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Plugins</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Security</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Plugins</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol  >
            <h5 className="title">Project</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Downloads</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Blog</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Documentation</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Plugins</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Security</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Plugins</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol >
            <h5 className="title">Community</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Downloads</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Blog</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Documentation</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Plugins</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Security</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Plugins</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol>
          <h5 className="title">Others</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Downloads</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Blog</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Documentation</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Plugins</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Security</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Plugins</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol XS={4}></MDBCol>
        </div>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.instagram.com/iam_ahmademi" target="blank" style={{color:"red" , textDecoration:"none"}}> ahmad raza</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;