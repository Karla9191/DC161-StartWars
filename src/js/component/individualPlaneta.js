import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { BsHeart } from "react-icons/bs";
import { Context } from "../store/appContext";

export const individualPlaneta = ({ planet }) => {
	console.log(planet);
	const { store, actions } = useContext(Context);
	return (
		<>
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Rotation_period</th>
						<th>Orbital_period</th>
						<th>Diameter</th>
						<th>Climate</th>
						<th>Gravity</th>
						<th>terrain</th>
						<th>surface_water</th>
						<th>population</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<th>{planet.name}</th>
						<th>{planet.rotation_period}</th>
						<th>{planet.orbital_period}</th>
						<th>{planet.diameter}</th>
						<th>{planet.climate}</th>
						<th>{planet.gravity}</th>
						<th>{planet.terrain}</th>
						<th>{planet.surface_water}</th>
						<th>{planet.population}</th>
					</tr>
				</tbody>
			</Table>
		</>
	);
};

individualPlaneta.propTypes = {
	planet: PropTypes.object
};
