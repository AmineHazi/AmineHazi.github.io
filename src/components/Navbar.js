import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Pq from "./Pq.svg"

function Navbar() {

  const [isMobile,setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h3 className="logo">THL 
      <img src={Pq} width="100px" className="logoim" /></h3>
      <ul 
        className={isMobile? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)} >
        <Link to="/Partone" className="Partone">
          <li>Part &#8544;</li>
          <br/>
        </Link>
        <Link to="/Parttwo" className="Parttwo">
          <li>Part &#8545;</li>
          <br/>
        </Link>
        <Link to="/Partthree" className="Partthree">
          <li>Part &#8546;</li>
          <br/>
        </Link>
        <Link to="/" className="Report">
          <li>Rapport</li>
          <br/>
        </Link>
        <Link to="/Madeby" className="Madeby">
          <li>MadeBy</li>
          <br/>
          <br/>
        </Link>
      </ul>
      <button className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (<i className="fas fa-times"></i> ) : (<i className="fas fa-bars"></i>)}
      </button>
    </nav>
  );
}

export default Navbar