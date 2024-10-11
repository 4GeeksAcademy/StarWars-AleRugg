import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

import "../../styles/characters.css";



const Characters = () => {
    const { store, actions } = useContext(Context);

    // const {details, setDetails} = useState[null]
    const {characterId} = useParams()

    useEffect(()=>{
      actions.getAllCharacters();
      actions.getCharactersProperties(characterId);
    },[])

    


   

    return (
        <div className="container-fluid d-flex flex-column align-items-center mt-5">
          <h1 className="text-white" >CHARACTERS</h1>
          <div className="row justify-content-center">
            {store.characters.map((character, index) => {
              return (
                <div className="col-md-4 mb-3 d-flex justify-content-center" key={index}>
                  <div className="card colorbg" style={{ maxWidth: "540px", maxHeight: "300px" }}>
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
                      <div className="col-md-6 bodyCardElementsWrapper">
                        <div className="card-body bodyCardElements">
                          
                          <div>
                          <FaRegHeart className="iconoCorazon"  onClick={()=> actions.addFavorites(character.name)} />
                          <div>
                          <h5 className="card-title titulo">{character.name}</h5>
                          </div>
                    

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
											<button className="btnSeeMore text-white" >Details Here</button>
										</Link>
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

 