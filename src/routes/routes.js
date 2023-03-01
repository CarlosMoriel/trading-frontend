import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Graphics from "../components/Graphics";
import Traning from "../components/Traning";
import Models from "../components/Models";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/traning" element={<Traning />} />
				<Route path="/models" element={<Models />} />
				<Route path="/graphics" element={<Graphics />} />
			</Routes>
		</BrowserRouter>
	);
}
