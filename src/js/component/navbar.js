import React from "react";
import { Link } from "react-router-dom"
import rigoImage from "../../img/image.png";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";

import "../../styles/navBar.css";

export const Navbar = () => {

  return (

<nav className="navbar bg-body-tertiary bg-black">
  <div className="container-fluid">
  <ul className="navbar-nav d-flex flex-row">
              
                <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="#">
                        <i className="fab fa-facebook-f text-white"></i>
                    </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="#">
                        <i className="fab fa-instagram text-white"></i>
                    </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="#">
                        <i className="fab fa-linkedin text-white"></i>
                    </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="#">
                        <i className="fab fa-github text-white"></i>
                    </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="#">
                        <i className="fab fa-twitter text-white"></i>
                    </a>
                </li>
               
                <li className="nav-item me-3 me-lg-0 dropdown">
                    <a data-mdb-dropdown-init className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-user text-white"></i>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <a className="dropdown-item" href="#">Action</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">Another action</a>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </li>
                    </ul>
                </li>
            </ul>
<div>   
		<p>
			<img  width="150" height="75" src={rigoImage} />
		</p>
    </div>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success" type="submit">Search</button>
      
    </form>
  </div>
</nav>
  );
};
export default Navbar;

