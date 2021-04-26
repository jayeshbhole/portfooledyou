import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FiChevronDown } from "react-icons/fi";
import "../scss/landing.scss";

const Landing = () => {
	return (
		<div id="landing" className="section">
			<span>👋 Hey there!</span>
			<h1>
				<span style={{ color: "#eaeaea" }}>I am</span> Jayesh Bhole
			</h1>
			<h2>
				I am fond of creating stuff for the web!{" "}
				<span style={{ fontSize: "2.3rem" }}>🕸️</span>
			</h2>
			<span style={{ display: "block" }}>
				Developer (Self && Web), Designer,
				<br />
				Undergraduate @ IIIT Pune
			</span>
			<br />
			<HashLink to="/#Contact" id="contact">
				Contact!
			</HashLink>
			<HashLink smooth id="chevron" to="/#About">
				<FiChevronDown />
				<FiChevronDown />
			</HashLink>
		</div>
	);
};

export default Landing;
