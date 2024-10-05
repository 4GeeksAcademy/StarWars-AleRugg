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
			planetsGens: [],
			characters: [],
			charactersGens: [],		
			vehicles: [],		  
			favoritos: [],
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

			getPlanets: () => { // ESTE FETCH SOLO TOMA 4 RESULTADOS 
				fetch("https://www.swapi.tech/api/planets?page=1&limit=10")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err))

			},

			getAllPlanets: () => { // ESTE FETCH SOLO TOMA 4 RESULTADOS 
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

			getCharactersGens: () => {

				const requestOptions = {
					method: "GET",
					redirect: "follow"
				  };
				  
				  fetch("https://swapi.dev/api/people/", requestOptions)
					.then((response) => response.text())
					.then((result) => {setStore({ charactersGens: result.results })
					})
					.catch((error) => console.error(error));
			},

			getPlanetsGens: () => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				  };
				  
				  fetch("https://swapi.dev/api/planets", requestOptions)
					.then((response) => response.json())
					.then((result) => console.log(result.results))
					.catch((error) => console.error(error));
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
