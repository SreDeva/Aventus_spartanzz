import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './style.css'

function LandingPage() {
  return (
    <>
    

      <div className="belowheader">
        <div className="px-4 pt-5 my-5 text-center form" style={{ marginBottom: '12px !important' }}>
          <h1 className="display-4 fw-bold text-body-emphasis para">Make your assets into digital assets</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 para">The platform where it lends digi gold as gold tokens and satifies needs of users </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5 bt">
            <Link to="/inve"><Button variant="primary" size="lg" className="pb">Get Loan</Button></Link>
              <Button variant="primary" size="lg" className="pb">On Development</Button>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="imagecontainer">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7mnaOUQYBWOGHy3-w2gTxgtAgi_8fhiUgA&usqp=CAU" alt="" />
      </div>


      <footer className="py-3 my-4">
       
      </footer>
    </>
  );
}

export default LandingPage;
