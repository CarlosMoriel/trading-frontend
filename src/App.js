import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveNavBar";
import Router from "./routes/routes";

function App() {
	return (
		<div className="App">
			<ResponsiveAppBar />
			<Router />
		</div>
	);
}

export default App;
