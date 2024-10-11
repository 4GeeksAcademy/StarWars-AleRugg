const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			planets: [],
			planetDetail: null,
			characters: [],
			characterDetail: null,
			characterProperties: [],		
			vehicles: [],
			vehicleDetail: null,		  
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			addFavorites: (favorite) => {

				const store = getStore();
				setStore({ favorites: [...store.favorites, favorite] })
				console.log(store.favorites)
			},

				deleteFavorite: (id) => {
				const store = getStore();
				store.favorites = store.favorites.filter((_, index) => index !== id);
				setStore({ favorites: [...store.favorites] })
			},



			

			getPlanetDetail: (id) => { 
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(res => res.json())
					.then(data => setStore({ planetDetail: data.result.properties }))
					.catch(err => console.error(err))

			},

			getCharacterDetail: (id) => { // ESTE FETCH SOLO TOMA 4 RESULTADOS 
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(res => res.json())
					.then(data => setStore({ characterDetail: data.result.properties }))
					.catch(err => console.error(err))

			},

			getVehicleDetail: (id) => { // ESTE FETCH SOLO TOMA 4 RESULTADOS 
				fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					.then(res => res.json())
					.then(data => setStore({ vehicleDetail: data.result.properties }))
					.catch(err => console.error(err))

			},

			getPlanets: () => { // ESTE FETCH SOLO TOMA 10 RESULTADOS 
				fetch("https://www.swapi.tech/api/planets?page=1&limit=10")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err))

			},

			getAllPlanets: () => {  
				fetch("https://www.swapi.tech/api/planets?page=2&limit=82")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err))

			},


			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }
						
					))
					.catch(err => console.error(err))
			},

			getCharactersProperties: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(res => res.json())
					.then(data => setStore({ characterProperties: data.results.properties }
						
					))
					.catch(err => console.error(err))
			},

			getAllCharacters: () => {
				fetch("https://www.swapi.tech/api/people?page=2&limit=82")
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }
						
					))
					.catch(err => console.error(err))
			},

			getAllVehicles: () =>{
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				  };
				  
				  fetch("https://www.swapi.tech/api/vehicles?page=2&limit=100", requestOptions)
					.then((response) => response.json())
					.then((result) => setStore({ vehicles: result.results }))
					.catch((error) => console.error(error))

			},




			
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});


				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
