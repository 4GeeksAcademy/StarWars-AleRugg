import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/characters.css";


const Characters = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
		actions.getCharacters()
    	}, [])

    return (
        <div className="text-center"> {/* Planets */}
            <div className="margins"  >
                <ul className="planetsUl">
                    {store.characters.map((character, index) => {
                        // const charImg = store.images.find((characterImage => characterImage.id == character.id ));
                        // console.log(charImg)						
                        return (
                            <div class="row">
                                <div class="col">
                                    {store.characters.map((character, index) => {
                                        return (
                                            <div class="card" key={index}  >
                                                <div class="card-body">
                                                <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} 
							alt="FotoStarWars"
							className="card-img2 text-white"							
							onError={(error) => {
								error.target.onerror = null; // Evitar bucle infinito si la imagen alternativa falla también
								error.target.src = "https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg"; // Ruta a la imagen alternativa
							  }}/>
                                                    <h5 class="card-title">{character.name}</h5>
                                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>


    )




}

export { Characters }

