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
			<div className="card-list-container row">
				<h3 className="text-white" >Planets</h3>
				<div className="card-list ">
					{store.planets.map((planet, index) => (
						<div className="card-item col" key={index}>
						<img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} 
							className="card-img text-white"							
							onError={(error) => {
								error.target.onerror = null; // Evitar bucle infinito si la imagen alternativa falla también
								error.target.src = "https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg"; // Ruta a la imagen alternativa
							  }}/>
							<div className="card-content">
								<h5 className="card-title">{planet.name}</h5>
								<p className="card-description">{planet.uid}</p>
							</div>
							
						</div>
					))}
					
				</div>	
				<Link to="/planets"
                        data-mdb-tab-init
                        className="nav-link linkTexts"
                        id="ex3-tab-2"
                        href="#ex3-tabs-2"
                        role="tab"
                        aria-controls="ex3-tabs-2"
                        aria-selected="false"
                    >                        
                           <button className="btnSeeMore text-white"  >All planets</button>
                    </Link>		
			</div>

			<div className="card-list-container row ">
				<h3 className="text-white" >Characters</h3>
				<div className="card-list">
					{store.characters.map((character, index) => (
						<div className="card-item2 col" key={index}>
							<img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} 
							className="card-img2 text-white"							
							onError={(error) => {
								error.target.onerror = null; // Evitar bucle infinito si la imagen alternativa falla también
								error.target.src = "https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg"; // Ruta a la imagen alternativa
							  }}/>
							<div className="card-content">
								<h5 className="card-title">{character.name}</h5>
								<p className="card-description">{character.uid}</p>
							</div>
						</div>
					))}
				</div>
				<Link to="/characters"
                        data-mdb-tab-init
                        className="nav-link linkTexts"
                        id="ex3-tab-2"
                        href="#ex3-tabs-2"
                        role="tab"
                        aria-controls="ex3-tabs-2"
                        aria-selected="false"
                    >                        
                           <button className="btnSeeMore text-white"  >All characters</button>
                    </Link>
				
			</div>
				
		</div>








	)
};


