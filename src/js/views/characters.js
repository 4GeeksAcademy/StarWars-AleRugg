import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


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
                                    {store.characters.map(() => {
                                        return (
                                            <div class="card" key={index}  >
                                                <div class="card-body">
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

