const SingleCard = ({ nome, umidità, temp, tempMax, tempMin, stato, condizioniMeteo }) => {
	const kelvinToCelsius = (tempInKelvin) => {
		return Math.round(tempInKelvin - 273.15);
	};

	return (
		<div className="mt-5">
			<div className="d-flex justify-content-center align-items-center">
				<h2 className="m-0">{nome}</h2>
				<span className="ms-2">({stato})</span>
			</div>
			<p className="display-6 mt-3">{kelvinToCelsius(temp)}°C</p>
			<span>
				{kelvinToCelsius(tempMin)}°C - {kelvinToCelsius(tempMax)}°C
			</span>
			<span>{umidità}</span>
			<p>{condizioniMeteo}</p>
		</div>
	);
};

export default SingleCard;
