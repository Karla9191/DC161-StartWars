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
			<ul>
				{store.peopleList.map((item, index) => {
					return (
						<li key={index}>
							<h5>
								<span>{item.name}</span>
							</h5>
							<h6>
								Gender: <span>{item.gender}</span>
							</h6>
							<h6>
								Hair color: <span>{item.hair_color}</span>
							</h6>
							<h6>
								Eye color: <span>{item.eye_color}</span>{" "}
							</h6>
							<Button variant="outline-primary">Learn more!</Button>
							{store.favorites.includes(item.name) ? null : (
								<Button onClick={() => actions.setFavorites(item.name)} variant="outline-warning">
									<BsHeart />
								</Button>
							)}
						</li>
					);
				})}
			</ul>
		</Jumbotron>
	);
};

/*
<h1>Listado de personajes</h1>
<span>{JSON.stringify(store.favorites)}</span>
<h5>Height:</h5><span>{item.height}</span>
<h5>Mass: </h5><span>{item.mass}</span>
<h5>Skin color: </h5> <span>{item.skin_color}</span>
<h5>Birth year: </h5> <span>{item.birth_year}</span>
*/
