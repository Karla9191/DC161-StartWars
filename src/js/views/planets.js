import React, { useEffect, useContext } from "react";
import { Jumbotron, Button, Card } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPlanets();
	}, []);

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src="holder.js/400px200" />
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>

				<Button variant="primary">Learn More!</Button>
				<Button onClick={() => actions.setFavorites(item.name)} variant="outline-primary">
					Agregar
				</Button>
			</Card.Body>
		</Card>
	);
};

{
	/*

	<Jumbotron>
			<h1>Listado de planetas</h1>
			<span>{JSON.stringify(store.favorites)}</span>
			<ul>
				{store.planetsList.map((item, index) => {
					return (
						<li key={index}>
							<span>{item.name}</span>
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


*/
}
