import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/image.png";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { Carousel, initMDB } from "mdb-ui-kit";

import "../../styles/planetSingleView.css";



const PlanetSingleView = () => {
    const { store, actions } = useContext(Context);
    const { planetId } = useParams()



    useEffect(() => {

        actions.getPlanetDetail(planetId)
        console.log(store.planetDetail)


    }, [])


    console.log(store.planetDetail)

    return (
        <div className="wrapper">
            {!store.planetDetail ? (<h1>"cargando planeta..."</h1>) : (

                <div className="card mb-3 cardContainer" style={{ maxWidth: "1000px" }}>
                    <div className="row g-0">
                        <div className="col-md-6 cardimg">
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`}
                                className="card-img text-white "
                                onError={(error) => {
                                    error.target.onerror = null; // Evitar bucle infinito si la imagen alternativa falla también
                                    error.target.src = "https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg"; // Ruta a la imagen alternativa
                                }} />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h1 className="card-title text-black planetName mb-3">{store.planetDetail.name}</h1>

                                <ul>
                                    <li>
                                    <strong>Climate: </strong> {store.planetDetail.climate}
                                    </li>
                                    <li>
                                    <strong>Created: </strong> {store.planetDetail.created}
                                    </li>
                                    <li>
                                     <strong>Diameter: </strong>   {store.planetDetail.diameter}
                                    </li>
                                    <li>
                                    <strong>Edited: </strong> {store.planetDetail.edited}
                                    </li>
                                    <li>
                                    <strong>Gravity: </strong>   {store.planetDetail.gravity}
                                    </li>
                                    <li>
                                    <strong>Orbital Period: </strong>  {store.planetDetail.orbital_period}
                                    </li>
                                    <li>
                                    <strong>Population: </strong>   {store.planetDetail.population}
                                    </li>
                                    <li>
                                    <strong>Rotation Period: </strong>   {store.planetDetail.rotation_period}
                                    </li>
                                    <li>
                                    <strong>Water Surface: </strong>  {store.planetDetail.surface_water}
                                    </li>
                                    <li>
                                    <strong>Terrain: </strong>  {store.planetDetail.terrain}
                                    </li>
                                    <li>
                                    <strong>Url: </strong>   {store.planetDetail.url}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
          

            )}

        </div>
    )
}

export { PlanetSingleView };