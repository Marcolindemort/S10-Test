const SingleCard = ({ nome, umidità, temp, tempMax, tempMin, stato, condizioniMeteo, icon }) => {
	const kelvinToCelsius = (tempInKelvin) => {
		return Math.round(tempInKelvin - 273.15);
	};

	return (
		<div className="mt-5 sfondo">
			<div className="d-flex justify-content-center align-items-center">
				<h2 className="m-0 display-4 fw-bold">{nome}</h2>
				<span className="ms-2">({stato})</span>
				<img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="pic condizioni meteo"></img>
			</div>
			<p className="display-5 mt-3">{kelvinToCelsius(temp)}°C</p>
			<p className="my-2">
				Min: {kelvinToCelsius(tempMin)}°C - Max: {kelvinToCelsius(tempMax)}°C
			</p>
			<p className="my-2">Umidità: {umidità}%</p>
			<p>Tempo: {condizioniMeteo}</p>
		</div>
	);
};

export default SingleCard;
