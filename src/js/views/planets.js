import React, { useEffect, useContext } from "react";
import { Jumbotron, Button, Card, CardDeck } from "react-bootstrap";
import { Context } from "../store/appContext";
import { BsHeart } from "react-icons/bs";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPlanets();
	}, []);

	return (
		<CardDeck>
			<Card style={{ width: "25rem" }}>
				<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />{" "}
				<Card.Body>
					<ul>
						{store.planetsList.map((item, index) => {
							return (
								<li key={index}>
									{" "}
									<Card.Title>
										<h5>
											<span>{item.name}</span>
										</h5>
									</Card.Title>{" "}
									<Card.Text>
										<h6>
											Population: <span>{item.population}</span>
										</h6>
										<h6>
											Terrain: <span>{item.terrain}</span>
										</h6>
										<Button variant="outline-primary">Learn more!</Button>{" "}
										{store.favorites.includes(item.name) ? null : (
											<Button
												onClick={() => actions.setFavorites(item.name)}
												variant="outline-warning">
												<BsHeart />
											</Button>
										)}
									</Card.Text>
								</li>
							);
						})}
					</ul>
				</Card.Body>
			</Card>
		</CardDeck>
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
                            <h5><span>{item.name}</span></h5>
                            <span>{item.population}</span>
                            <span>{item.terrain}</span>
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
