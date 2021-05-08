import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { BsHeart } from "react-icons/bs";
import { Context } from "../store/appContext";
import { Characters } from "../views/characters";

export const CardCharacter = ({ people }) => {
	//console.log(people);
	const { store, actions } = useContext(Context);
	return (
		<>
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="https://pm1.narvii.com/6361/c338000011dddc976bc1e960bf83c6a04402b720_hq.jpg"
				/>
				<Card.Body>
					<Card.Title>Name: {people.name}</Card.Title>
					<Card.Text>Gender: {people.gender}</Card.Text>
					<Card.Text>Hair color: {people.hair_color}</Card.Text>
					<Card.Text>Eye color: {people.eye_color}</Card.Text>
					<Button variant="outline-primary">Learn more!</Button>
					<Button onClick={() => actions.setFavorites(people.name)} variant="outline-warning">
						<BsHeart />
					</Button>
				</Card.Body>
			</Card>
		</>
	);
};

CardCharacter.propTypes = {
	people: PropTypes.object
};
