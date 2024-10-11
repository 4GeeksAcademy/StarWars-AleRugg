import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


import "../../styles/characterSingleView.css";



const CharacterSingleView = () => {
    const { store, actions } = useContext(Context);
    const { characterId } = useParams()



    useEffect(() => {

        actions.getCharacterDetail(characterId)


    }, [])


    console.log(store.characterDetail)

    return (
        <div className="cardImg">
            {!store.characterDetail ? (<h1>"cargando personaje..."</h1>) : (

                <div className="card mb-3" style={{ maxWidth: "1000px" }}>
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`}
                                className="card-img text-white"
                                onError={(error) => {
                                    error.target.onerror = null; // Evitar bucle infinito si la imagen alternativa falla también
                                    error.target.src = "https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg";
                                }} />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h1 className="card-title text-black mb-3 characterName">{store.characterDetail.name}</h1>

                            
                                <ul>
                                    <li>
                                    <strong>  Birth date or Creation Date: </strong>{store.characterDetail.birth_year}
                                    </li>
                                    <li>
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

export { CharacterSingleView };