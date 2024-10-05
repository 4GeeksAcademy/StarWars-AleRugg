import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/image.png";
import slide1 from "../../img/slide1.png";
import slide2 from "../../img/slide2.png";
import slide3 from "../../img/slide3.png";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { Carousel, initMDB } from "mdb-ui-kit";
import { Ripple } from "mdb-ui-kit";


import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();


	useEffect(() => {
		actions.getPlanets()
		actions.getCharacters()
		actions.getCharactersGens()
	


	}, [])

	useEffect(() => {
		initMDB({ Carousel });
		initMDB({ Ripple });
	}, [])

	useEffect(() =>{
		console.log(store.characters)
		console.log(store.charactersGens)
	},[store.characters])



	return (
		<div className="wrapper">
			<h1 className="text-white"> Bienvenido a tu Blog de StarWars</h1>
			<h4 className="text-white">Que la fuerza este contigo!</h4>
			{/* <!-- Carousel wrapper --> */}
			<div id="carouselMaterialStyle" className="carousel slide carousel-fade" data-mdb-ride="carousel" data-mdb-carousel-init>
				{/* <!-- Indicators --> */}
				<div className="carousel-indicators">
					<button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" className="active" aria-current="true"
						aria-label="Slide 1">
					</button>
					<button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2" aria-label="Slide 3"></button>
				</div>

				{/* <!-- Inner --> */}
				<div className="carousel-inner rounded-5 shadow-4-strong">
					{/* <!-- Single item --> */}
					<div className="carousel-item active">
						<img src={slide1} className="d-block slidesImgs"
							alt="Sunset Over the City" />

					</div>

					{/* <!-- Single item --> */}
					<div className="carousel-item">
						<img src={slide2} className="d-block  slidesImgs"
							alt="Canyon at Nigh" />

					</div>

					{/* <!-- Single item --> */}
					<div className="carousel-item">
						<img src={slide3} className="d-block  slidesImgs"
							alt="Cliff Above a Stormy Sea" />

					</div>
				</div>
				{/* <!-- Inner --> */}

				{/* <!-- Controls --> */}
				<button className="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>

			
			{/* <!-- Carousel wrapper --> */}
			<div className="card-list-container">
				<h3 className="text-white" >Planets</h3>
				<div className="card-list">
					{store.planets.map((planet, index) => (
						<div className="card-item" key={index}>
							<img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} 
							alt="FotoStarWars"
							className="card-img text-white" />
							<div className="card-content">
								<h5 className="card-title">{planet.name}</h5>
								<p className="card-description">{planet.uid}</p>
							</div>
							
						</div>
					))}
					
				</div>	
				<button className="btnSeeMore" >Ver todos los planetas</button>			
			</div>

			<div className="card-list-container">
				<h3 className="text-white" >Characters</h3>
				<div className="card-list">
					{store.characters.map((character, index) => (
						<div className="card-item" key={index}>
							<img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} 
							alt="FotoStarWars"
							className="card-img text-white" />
							<div className="card-content">
								<h5 className="card-title">{character.name}</h5>
								<p className="card-description">{character.uid}</p>
							</div>
						</div>
					))}
				</div>
				<button className="btnSeeMore">Ver todos los planetas</button>
			</div>
				
		</div>








	)
};


