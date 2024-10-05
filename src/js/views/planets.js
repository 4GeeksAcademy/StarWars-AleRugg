import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/image.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/planets.css";



const Planets = () => {
    const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPlanets()
    	}, [])

		return (
			<div className="text-center"> {/* Planets */}
				<div className="margins"  >
								<div className="row">
									<div className="col">
										{store.planets.map((planet, index) => {
											return (
												<div className="card" key={index}  >
													<div className="card-body">
													<img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} 
							alt="FotoStarWars"
							className="card-img2 text-white"							
							onError={(error) => {
								error.target.onerror = null; // Evitar bucle infinito si la imagen alternativa falla también
								error.target.src = "https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg"; // Ruta a la imagen alternativa
							  }}/>
														<h5 className="card-title text-black">{planet.name}</h5>
														<p className="card-text">{planet.url}</p>
														<a href="#" className="btn btn-primary">{planet.uid}</a>
													</div>
												</div>
											)
										})}
									</div>
								</div>
								</div>

					</div>

	
	
		)



}

export {Planets}