import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Buttons from "./Button";
import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";

// function Navs({ scrolled }) {
//   return (
//     <Navbar
//       bg={scrolled ? "rgb(14,154,154,0.5)" : "transparent"}
//       variant="dark"
//       expand="lg"
//       fixed="top"
//       className={scrolled ? "nav scrolled z-0" : "nav z-0"}
//       style={scrolled ? {} : { width: "100%" }}
//     >
//       <Container className="containerr">
//         {!scrolled && (
//           <Navbar.Brand href="#home" className="project">
//             <img src="src\styles\logoeye.png" alt="" />
//             CRYPTAGE
//           </Navbar.Brand>
//         )}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav
//             className="me-auto"
//             style={
//               scrolled
//                 ? {
//                     paddingLeft: "0",
//                     width: "50%",
//                     margin: "auto",
//                     color: "black !important",
//                     backgroundColor: "rgb(14,154,154)",
//                     borderRadius: "20px",
//                     display: "flex",
//                     justifyContent: "space-around",
//                     marginLeft: "35%",
//                   }
//                 : {}
//             }
//           >
//             <Link to="/" className="nav-link">
//               Home
//             </Link>
//             <Nav.Link
//               href="#features"
//               className={!scrolled ? "text-white" : "text-black"}
//             >
//               Features
//             </Nav.Link>
//             <Nav.Link
//               href="#pricing"
//               className={!scrolled ? "text-white" : "text-black"}
//             >
//               Pricing
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//       <Link to="/chatg">
//         <Buttons btnname="InvestIQ"></Buttons>
//       </Link>
//       <br />
//       <br />
//       <Link to="/dash">
//         <Buttons btnname="Dashboard" />
//       </Link>
//       <ConnectWallet />
//     </Navbar>
//   );
// }

export default function Header() {
  return (
    <div>
      <div className=" shadow-sm shadow-gray-400 flex flex-row justify-between p-4">
        <div>
          <h1 className="font-bold text-2xl">WikiOnChain</h1>
        </div>
        <nav>
          <ul className="flex gap-4">
            <li className="hover:text-blue-600 hover:scale-125 transition-all">
              <Link to="/create">Create</Link>
            </li>
            <li className="hover:text-blue-600 hover:scale-125 transition-all">
              <Link to="/">Home</Link>
            </li>
            <ConnectWallet/>
          </ul>
        </nav>
      </div>
          
    </div>
  );
}
// export default Header;
