import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/image.png";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);



	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		actions.getPlanets()
		actions.getCharacters()
		console.log(store.planets)
	

	}, [])

	useEffect(()=>{
		if(store.characters.length > 0) {
			console.log(store.characters)
		}
	},[])

	



	return (
		<div className="text-center mt-5 md "> {/* Planets */}
			<h1 className="text-white">Explore the StarWars world here</h1>
			<div className=" md d-flex flex-row justify-content-center"  >
				<ul className="planetsUl row prueba">
					{store.planets.map((planet, index) => {
						return (
							<div className="card col-3 render" style={{ width: "22rem" }} key={index} >
								<img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} alt="Card image cap"></img>
								<div className="card-body">
									<h5 className="card-title">{planet.name}</h5>
									<p className="card-text">{planet.url}</p>
									<a href="#" className="btn btn-primary">{planet.uid}</a>
								</div>
							</div>
						)
					})}
				</ul>
			</div>
			{/* Characters */}
			<div className="md d-flex flex-row justify-content-center"  >
				<ul className="planetsUl row prueba">				
					{store.characters.map((character, index) => {
							// const charImg = store.images.find((characterImage => characterImage.id == character.id ));
							// console.log(charImg)						
						return (
							<div className="card col-3 render" style={{ width: "22rem" }} key={index} >
							<img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} alt="Card image cap"></img>
							<div className="card-body">
								<h5 className="card-title">{character.name}</h5>
								<p className="card-text">{character.url}</p>
								<a href="#" className="btn btn-primary">{character.uid}</a>
							</div>
						</div>
						)
					})}
				</ul>
			</div>

			
		</div>
	)
};


