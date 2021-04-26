// Dependancies
import Halo from "vanta/dist/vanta.halo.min.js";

// Styles
import "./scss/main.scss";
import "./scss/landing.scss";

// Components
import { useState, useRef, useEffect } from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import About from "./components/About";
import SideLinks from "./components/SideLinks";

function App() {
	return (
		<div ref={vanta} className="vanta">
			<div className="main">
				<BrowserRouter>
					<Navbar />
					<SideLinks />

					<div className="sections">
						<Landing />
						<About />
						{/* <Projects /> */}
						{/* <Contact /> */}
					</div>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
