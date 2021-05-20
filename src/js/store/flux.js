const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			peopleList: [],
			planetsList: [],
			planetsDetail: []
		},
		actions: {
			fetchPeople: async () => {
				const URL = "https://swapi.dev/api/people/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};

				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				//console.log(">>DATA>>", json);
				setStore({ peopleList: json.results });
			},

			fetchPlanets: async () => {
				const URL = "https://swapi.dev/api/planets/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};

				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				//console.log(">>DATA>>", json);
				setStore({ planetsList: json.results });
			},

			fetchPlanetsDetail: async id => {
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(`https://swapi.dev/api/planets/${id}/`, config);
				const json = await response.json();
				setStore({ planetsDetail: json });
			},

			setFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},

			removeFavorites: name => {
				const store = deleteStore();
				deleteStore({ favorites: [...store.favorites, name] });
			}
		}
	};
};

export default getState;
