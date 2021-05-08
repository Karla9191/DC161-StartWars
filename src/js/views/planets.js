import React, { useEffect, useContext } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import { BsHeart } from "react-icons/bs";
import { CardPlanet } from "../component/card";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<Jumbotron>
			<ul className="scrolling">
				{store.planetsList.map((item, index) => {
					return (
						<div className="container-card" key={index}>
							<CardPlanet planet={item} />
						</div>
					);
				})}
			</ul>
		</Jumbotron>
	);
};
{
	/*
  
    */
	/*<li key={index} id="1">
							{" "}
							<h5>
								<span>{item.name}</span>
							</h5>
							<h6>
								Population: <span>{item.population}</span>
							</h6>
							<h6>
								Terrain: <span>{item.terrain}</span>
							</h6>
							<Button variant="outline-primary">Learn more!</Button>{" "}
							{store.favorites.includes(item.name) ? null : (
								<Button onClick={() => actions.setFavorites(item.name)} variant="outline-warning">
									<BsHeart />
								</Button>
							)}
                            </li>*/
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
