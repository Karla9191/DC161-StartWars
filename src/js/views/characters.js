import React, { useEffect, useContext } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	}, []);

	return (
		<Jumbotron>
			<h1>Listado de personajes</h1>
			<span>{JSON.stringify(store.favorites)}</span>
			<ul>
				{store.peopleList.map((item, index) => {
					return (
						<li key={index}>
							<h5>Name:</h5>
							<span>{item.name}</span>
							<h5>Height: </h5> <span>{item.height}</span>
							<h5>Mass: </h5> <span>{item.mass}</span>
							<h5>Hair color: </h5> <span>{item.hair_color}</span>
							<h5>Skin color: </h5> <span>{item.skin_color}</span>
							<h5>Eye color: </h5> <span>{item.eye_color}</span>
							<h5>Birth year: </h5> <span>{item.birth_year}</span>
							<h5>Gender: </h5> <span>{item.gender}</span>
							{store.favorites.includes(item.name) ? null : (
								<Button onClick={() => actions.setFavorites(item.name)} variant="outline-primary">
									Agregar
								</Button>
							)}
						</li>
					);
				})}
			</ul>
		</Jumbotron>
	);
};
