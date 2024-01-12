import logo from "../logo.png";

const Welcome = () => (
	<div className="d-flex justify-content-center align-items-center mt-5">
		<h1 className="me-3">Welcome to MeteoCode</h1>
		<img src={logo} alt="logo meteo" width={200}></img>
	</div>
);
export default Welcome;
