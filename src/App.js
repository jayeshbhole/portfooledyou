// Dependancies
import { BrowserRouter } from "react-router-dom";
// Styles
import "./scss/main.scss";
import "./scss/landing.scss";
// Components;
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import SideLinks from "./components/SideLinks";

function App() {
	return (
		<>
			<div className="main">
				<BrowserRouter>
					<Navbar />

					<div className="sections">
						<Landing />
						<About />
						<Projects />
					</div>
					<SideLinks />
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
