import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import "../../styles/characters.css";



const Characters = () => {
    const { store, actions } = useContext(Context);
    const {characterId} = useParams()

    useEffect(()=>{
      actions.getAllCharacters()
      actions.getCharactersProperties(characterId)
    },[])



    return (
        <div className="container-fluid d-flex flex-column align-items-center mt-5">
          <h1 className="text-white" >CHARACTERS</h1>
          <div className="row justify-content-center">
            {store.characters.map((character, index) => {
              return (
                <div className="col-md-4 mb-3 d-flex justify-content-center" key={index}>
                  <div className="card " style={{ maxWidth: "540px", maxHeight: "300px" }}>
                    <div className="row g-0">
                      <div className="col-md-6 divImg">
                      <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} 
							className="card-img3 text-white"	
              style={{ width: "250px", height: "270px" }}						
							onError={(error) => {
								error.target.onerror = null; // Evitar bucle infinito si la imagen alternativa falla también
								error.target.src = "https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg"; // Ruta a la imagen alternativa
							  }}/>
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <h5 className="card-title text-black">{character.name}</h5>
                          <p className="card-text">
                           {store.characterProperties.name}
                          </p>
                          <ul>
                                    <li>
                                    <strong>  Birth date or Creation Date: </strong>{store.characterProperties.birth_year}
                                    </li>
                                    {/* <li>
                                    <strong> Gender:</strong> {store.characterDetail.gender}
                                    </li>
                                    <li>
                                    <strong> Eye Color: </strong> {store.characterDetail.eye_color}
                                    </li>
                                    <li>
                                    <strong> Hair Color: </strong>{store.characterDetail.hair_color}
                                    </li>
                                    <li>
                                    <strong>  Height:</strong> {store.characterDetail.height}
                                    </li>
                                    <li>
                                    <strong> Skin Color: </strong> {store.characterDetail.skin_color}
                                    </li>
                                    <li>
                                    <strong>  Created:</strong> {store.characterDetail.created}
                                    </li>
                                    <li>
                                     <strong> Edited: </strong>{store.characterDetail.edited}
                                    </li>
                                    <li>
                                      <strong>HomeWorld:</strong>  {store.characterDetail.homeworld}
                                    </li>
                                    <li>
                                    <strong>  Mass: </strong> {store.characterDetail.mass}
                                    </li>
                                    <li>
                                    <strong>  Url: </strong>{store.characterDetail.url}
                                    </li> */}
                                </ul>
                        </div>
                        <Link to={`/characterSingleView/${character.uid}`}
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

export { Characters }

 