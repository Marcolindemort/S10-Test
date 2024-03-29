import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Welcome from "./components/Welcome";
import SingleCard from "./components/SingleCard";

function App(props) {
	return (
		<div className="App">
			<BrowserRouter>
				<SearchBar />
				<Routes>
					<Route path="/" element={<Welcome />} />
					<Route path="/details/:city" element={!props && <SingleCard />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
