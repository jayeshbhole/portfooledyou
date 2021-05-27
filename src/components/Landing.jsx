import { HashLink } from "react-router-hash-link";
import { FiChevronDown } from "react-icons/fi";
import "../scss/landing.scss";

const Landing = () => {
	return (
		<section id="Landing">
			<span>Hey there!</span>
			<h1>
				<span>I am</span> Jayesh Bhole
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
			<span id="cta">
				<HashLink to="/#Contact" className="link-button">
					Contact!
				</HashLink>
				<a
					target="blank"
					href="https://drive.google.com/uc?export=download&id=1TnUvSZo7lijHOwmRKb4qYQxvkpMIm60U"
					className="link-button">
					Resume
				</a>
			</span>

			<HashLink smooth id="chevron" to="/#About">
				<FiChevronDown />
				<FiChevronDown />
			</HashLink>
		</section>
	);
};

export default Landing;
