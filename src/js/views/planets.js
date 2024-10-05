import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/image.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



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