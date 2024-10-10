import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


import "../../styles/vehicleSingleView.css";



const VehicleSingleView = () => {
    const { store, actions } = useContext(Context);
    const { vehicleId } = useParams()



    useEffect(() => {

        actions.getVehicleDetail(vehicleId)


    }, [])


    console.log(store.vehicleDetail)

    return (
        <div className="cardImg">
            {!store.vehicleDetail ? (<h1>"cargando personaje..."</h1>) : (

                <div className="card mb-3" style={{ maxWidth: "1000px" }}>
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicleId}.jpg`}
                                className="card-img text-white"
                                onError={(error) => {
                                    error.target.onerror = null; // Evitar bucle infinito si la imagen alternativa falla también
                                    error.target.src = "https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg"; // Ruta a la imagen alternativa
                                }} />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h1 className="card-title text-black mb-3 characterName">{store.vehicleDetail.name}</h1>

                            
                                <ul>
                                    <li>
                                    <strong>  Birth date or Creation Date: </strong>{store.vehicleDetail.model}
                                    </li>
                                    <li>
                                    <strong> Gender:</strong> {store.vehicleDetail.vehicle_class}
                                    </li>
                                    <li>
                                    <strong> Eye Color: </strong> {store.vehicleDetail.manufacturer}
                                    </li>
                                    <li>
                                    <strong> Hair Color: </strong>{store.vehicleDetail.cost_in_credits}
                                    </li>
                                    <li>
                                    <strong>  Height:</strong> {store.vehicleDetail.length}
                                    </li>
                                    <li>
                                    <strong> Skin Color: </strong> {store.vehicleDetail.crew}
                                    </li>
                                    <li>
                                    <strong>  Created:</strong> {store.vehicleDetail.passengers}
                                    </li>
                                    <li>
                                     <strong> Edited: </strong>{store.vehicleDetail.max_atmosphering_speed}
                                    </li>
                                    <li>
                                      <strong>HomeWorld:</strong>  {store.vehicleDetail.cargo_capacity}
                                    </li>
                                    <li>
                                    <strong>  Mass: </strong> {store.vehicleDetail.consumables}
                                    </li>
                                    <li>
                                    <strong>  Url: </strong>{store.vehicleDetail.url}
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

export { VehicleSingleView };