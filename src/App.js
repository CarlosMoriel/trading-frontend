import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveNavBar";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<div className="App">
			<ResponsiveAppBar />
			<Dashboard />
		</div>
	);
}

export default App;
