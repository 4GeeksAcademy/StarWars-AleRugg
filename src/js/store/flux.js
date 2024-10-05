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


			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }
						
					))
					.catch(err => console.error(err))
			},

			getCharactersGens: () => {

				const requestOptions = {
					method: "GET",
					redirect: "follow"
				  };
				  
				  fetch("https://swapi.dev/api/people/", requestOptions)
					.then((response) => response.text())
					.then((result) => {setStore({ charactersGens: result })
					})
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
