// Dependancies
import { BrowserRouter } from "react-router-dom";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
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
				<Canvas style={{ position: "fixed", top: "0", left: "0", zIndex: "-1" }}>
					<ambientLight intensity={0.9} />
					<spotLight position={[10, 10, 10]} angle={1} />
					<pointLight position={[10, 10, -10]} />
					<ThreeBack />
				</Canvas>
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

function ThreeBack(props) {
	const mesh = useRef();
	useFrame(() => {
		mesh.current.rotation.x = mesh.current.rotation.y += 0.0001;
	});
	return (
		<mesh {...props} ref={mesh} scale={1}>
			<sphereGeometry args={[6, 15]} />
			<meshStandardMaterial wireframe color={"#021a72"} />
		</mesh>
	);
}

export default App;
