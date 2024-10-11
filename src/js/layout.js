import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Planets } from "./views/planets";
import { Characters } from "./views/characters";
import { Single } from "./views/single";
import { CharacterSingleView } from "./views/characterSingleView";
import injectContext from "./store/appContext";
import { Vehicles } from "./views/vehicles";
import { PlanetSingleView } from "./views/planetSingleView";
import { VehicleSingleView } from "./views/vehicleSingleView"
import { FavoritesView } from "./component/favoritesView";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/vehicles" element={<Vehicles />} />
						<Route path="/planetSingleView/:planetId" element={<PlanetSingleView />} />
						<Route path="/characterSingleView/:characterId" element={<CharacterSingleView />} />
						<Route path="/vehicleSingleView/:vehicleId" element={<VehicleSingleView />} />
						<Route path="/favoritesView/" element={<FavoritesView  />} />

						
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
