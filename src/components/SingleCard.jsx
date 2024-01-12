const SingleCard = ({ nome, umidità, temp, tempMax, tempMin, stato, condizioniMeteo }) => (
	<div>
		<h2>{nome}</h2>
		<span>{stato}</span>
		<p>{temp}</p>
		<span>
			{tempMin} - {tempMax}
		</span>
		<span>{umidità}</span>
		<p>{condizioniMeteo}</p>
	</div>
);

export default SingleCard;
