import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/image.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/planets.css";



const Vehicles = () => {
    const { store, actions } = useContext(Context);



	useEffect(() => {
        actions.getAllVehicles()
    	}, [])

		return (
			<div className="container-fluid d-flex flex-column align-items-center mt-5">
				<h1 className="text-white">PLANETS</h1>
				<div className="row justify-content-center">
					{store.vehicles.map((vehicle, index) => {
	
						return (
							<div className="col-md-4 mb-3 d-flex justify-content-center" key={index}>
								<div className="card " style={{ maxWidth: "540px", maxHeight: "350px" }}>
									<div className="row g-0">
										<div className="col-md-6">
											<img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
												className="card-img text-white"
												onError={(error) => {
													error.target.onerror = null; // Evitar bucle infinito si la imagen alternativa falla también
													error.target.src = "https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg"; // Ruta a la imagen alternativa
												}} />
										</div>
										<div className="col-md-6">
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">
													This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
												</p>
												<p className="card-text">
													<small className="text-muted">Last updated 3 mins ago</small>
												</p>
											</div>
											<Link to={`/vehicleSingleView/${vehicle.uid}`}
												data-mdb-tab-init
												className="nav-link linkTexts"
												id="ex3-tab-2"
												href="#ex3-tabs-2"
												role="tab"
												aria-controls="ex3-tabs-2"
												aria-selected="false"
											>
												<button className="btnSeeMore text-white" >SingleView</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);



}

export {Vehicles}

