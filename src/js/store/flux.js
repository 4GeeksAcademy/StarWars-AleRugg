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
			vehicles: [],
			images: [
				{ id: "1", 
				  url: "https://starwars-visualguide.com/#/characters/1"
				},
				{ id: "2", url: "https://starwars-visualguide.com/#/characters/2" },
				{ id: "3", url: "https://starwars-visualguide.com/#/characters/3" },
				{ id: "4", url: "https://starwars-visualguide.com/#/characters/4" },
				{ id: 5, url: "https://starwars-visualguide.com/#/characters/5" },
				{ id: 6, url: "https://starwars-visualguide.com/#/characters/6" },
				{ id: 7, url: "https://starwars-visualguide.com/#/characters/7" },
				{ id: 8, url: "https://starwars-visualguide.com/#/characters/8" },
				{ id: 9, url: "https://starwars-visualguide.com/#/characters/9" },
				{ id: 10, url: "https://starwars-visualguide.com/#/characters/10" },
				{ id: 11, url: "https://starwars-visualguide.com/#/characters/11" },
				{ id: 12, url: "https://starwars-visualguide.com/#/characters/12" },
				{ id: 13, url: "https://starwars-visualguide.com/#/characters/13" },
				{ id: 14, url: "https://starwars-visualguide.com/#/characters/14" },
				{ id: 15, url: "https://starwars-visualguide.com/#/characters/15" },
				{ id: 16, url: "https://starwars-visualguide.com/#/characters/16" },
				{ id: 17, url: "" },
				{ id: 18, url: "https://starwars-visualguide.com/#/characters/18" },
				{ id: 19, url: "https://starwars-visualguide.com/#/characters/19" },
				{ id: 20, url: "https://starwars-visualguide.com/#/characters/20" },
				{ id: 21, url: "https://starwars-visualguide.com/#/characters/21" },
				{ id: 22, url: "https://starwars-visualguide.com/#/characters/22" },
				{ id: 23, url: "https://starwars-visualguide.com/#/characters/23" },
				{ id: 24, url: "https://starwars-visualguide.com/#/characters/24" },
				{ id: 25, url: "https://starwars-visualguide.com/#/characters/25" },
				{ id: 26, url: "https://starwars-visualguide.com/#/characters/26" },
				{ id: 27, url: "https://starwars-visualguide.com/#/characters/27" },
				{ id: 28, url: "https://starwars-visualguide.com/#/characters/28" },
				{ id: 29, url: "https://starwars-visualguide.com/#/characters/29" },
				{ id: 30, url: "https://starwars-visualguide.com/#/characters/30" },
				{ id: 31, url: "https://starwars-visualguide.com/#/characters/31" },
			  ],
			  
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

			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
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
