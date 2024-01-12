import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SingleCard from "./SingleCard";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [meteo, setMeteo] = useState([]);
	const [homeButton, setHomeButton] = useState(false);
	const navigate = useNavigate();

	const handleSearch = async () => {
		try {
			let response = await fetch(
				"https://api.openweathermap.org/data/2.5/weather?q=" + searchQuery + "&appid=42c5ae9bd56538e50a29a747b9982e07"
			);

			if (response.ok) {
				let weather = await response.json();
				console.log("meteo", weather);
				setMeteo(weather);
				setHomeButton(true);
				navigate(`/details/${searchQuery}`);
			} else {
				console.log("Errore nella risposta della fetch:", response.statusText);
			}
		} catch (error) {
			console.log("Errore durante la fetch:", error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch();
	};

	const handleHomeClick = () => {
		navigate(`/`);
		setSearchQuery([]);
		setMeteo([]);
		setHomeButton(false);
	};

	return (
		<Container className="mt-5">
			<Row className="d-flex justify-content-center">
				<Col xs={6}>
					<Form onSubmit={handleSubmit}>
						<Form.Group>
							<Form.Control
								type="search"
								placeholder="Cerca la tua città!"
								className="text-center rounded-5"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
						</Form.Group>
					</Form>
					<Button onClick={handleSearch} className="mt-3 me-2">
						Cerca città
					</Button>
					{homeButton && (
						<Button onClick={handleHomeClick} className="mt-3 ms-2">
							Home
						</Button>
					)}
				</Col>
			</Row>
			<Row className="d-flex justify-content-center">
				<Col xs={8}>
					{meteo.name && (
						<SingleCard
							nome={meteo.name}
							umidità={meteo.main.humidity}
							temp={meteo.main.temp}
							tempMax={meteo.main.temp_max}
							tempMin={meteo.main.temp_min}
							stato={meteo.sys.country}
							condizioniMeteo={meteo.weather[0].main}
							icon={meteo.weather[0].icon}
						/>
					)}
				</Col>
			</Row>
		</Container>
	);
};

export default SearchBar;
