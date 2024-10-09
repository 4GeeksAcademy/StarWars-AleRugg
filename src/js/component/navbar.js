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

                </ul>
                <div>
                    <Link to="/">
                        <img width="325" height="125" className="m-1" src={rigoImage} />
                    </Link>
                </div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <ul className="nav nav-tabs nav-justified  pillsSize " id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <Link to="/characters"
                        data-mdb-tab-init
                        className="nav-link linkTexts"
                        id="ex3-tab-1"
                        href="#ex3-tabs-1"
                        role="tab"
                        aria-controls="ex3-tabs-1"
                        aria-selected="true"
                    >                      
                                CHARACTERS
                    
                    </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to="/planets"
                        data-mdb-tab-init
                        className="nav-link linkTexts"
                        id="ex3-tab-2"
                        href="#ex3-tabs-2"
                        role="tab"
                        aria-controls="ex3-tabs-2"
                        aria-selected="false"
                    >                        
                            PLANETS
                    </Link>
                </li>
                <li className="nav-item " role="presentation">
                    <Link to="/vehicles"
                        data-mdb-tab-init
                        className="nav-link linkTexts"
                        id="ex3-tab-2"
                        href="#ex3-tabs-2"
                        role="tab"
                        aria-controls="ex3-tabs-2"
                        aria-selected="false"
                    >                        
                           VEHICLES
                    </Link>
                </li>
            </ul>






        </nav>
    );
};
export default Navbar;

