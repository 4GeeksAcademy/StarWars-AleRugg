import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/characters.css";


const Characters = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getAllCharacters()
    }, [])

    return (
        <div className="container-fluid d-flex flex-column align-items-center mt-5">
          <h1 className="text-white" >CHARACTERS</h1>
          <div className="row justify-content-center">
            {store.characters.map((character, index) => {
              return (
                <div className="col-md-4 mb-3 d-flex justify-content-center" key={index}>
                  <div className="card " style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                      <div className="col-md">
                      <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} 
							className="card-img text-white"							
							onError={(error) => {
								error.target.onerror = null; // Evitar bucle infinito si la imagen alternativa falla también
								error.target.src = "https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg"; // Ruta a la imagen alternativa
							  }}/>
                      </div>
                      <div className="col-md">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                          </p>
                          <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                          </p>
                        </div>
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

export { Characters }

 