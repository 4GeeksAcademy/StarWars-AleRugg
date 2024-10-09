import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/image.png";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { Carousel, initMDB } from "mdb-ui-kit";

import "../../styles/singleView.css";



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
                                <h5 className="card-title text-black">{store.planetDetail.name}</h5>

                                <ul>
                                    <li>
                                        {store.planetDetail.climate}
                                    </li>
                                    <li>
                                        {store.planetDetail.created}
                                    </li>
                                    <li>
                                        {store.planetDetail.diameter}
                                    </li>
                                    <li>
                                        {store.planetDetail.edited}
                                    </li>
                                    <li>
                                        {store.planetDetail.gravity}
                                    </li>
                                    <li>
                                        {store.planetDetail.orbital_period}
                                    </li>
                                    <li>
                                        {store.planetDetail.population}
                                    </li>
                                    <li>
                                        {store.planetDetail.rotation_period}
                                    </li>
                                    <li>
                                        {store.planetDetail.surface_water}
                                    </li>
                                    <li>
                                        {store.planetDetail.terrain}
                                    </li>
                                    <li>
                                        {store.planetDetail.url}
                                    </li>
                                </ul>

                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
          

            )}

        </div>
    )
}

export { PlanetSingleView };