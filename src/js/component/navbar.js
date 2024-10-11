import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import rigoImage from "../../img/image.png";
import { Context } from "../store/appContext";
import { RiDeleteBin6Fill } from "react-icons/ri";


import "../../styles/navBar.css";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const {characterId} = useParams()
    const navigate = useNavigate()

    const favsCount = store.favorites.length

    const deleteFavorite = (id) => {
        // Filtrar la lista de favoritos para eliminar el que coincida con el id
        store.favorites = store.favorites.filter((favorite) => favorite.uid !== id);
        setStore({ favorites: [...store.favorites] })
    };

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
                        <i className=" text-white btn  dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Favorites: {favsCount}
                        </i>
                        <div className="dropdown-menu text-white" aria-labelledby="dropdownMenu2">
                            <strong>Favoritos:</strong>
                            {store.favorites.map((favorite, index) => (
                                <div key={index}>
                                    <ul>
                                <li >{favorite} <RiDeleteBin6Fill className="deleteIcon"  onClick={() => deleteFavorite(favorite.uid)}/></li>
                                </ul>
                                </div>
                            ))}
                        </div>
                    </li>
                </ul>
                <div className="dropdown">

                </div>
                <div>
                    <Link to="/">
                        <img width="325" height="125" className="m-1" src={rigoImage} />
                    </Link>
                </div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" list="suggestions" type="search" placeholder="Search" aria-label="Search"></input>
                    <datalist id="suggestions">
                        <option  value="Luke SkyWalker"></option>
                        <option value="darth Vader"></option>
                        <option value="Tatooine"></option>
                        <option value="Sand Crawler"></option>
                        <option value="Obi Wan Kenobi"></option>
                    </datalist>
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

