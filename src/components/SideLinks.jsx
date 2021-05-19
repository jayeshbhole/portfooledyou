import "../scss/sideLinks.scss";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";

const SideLinks = () => {
	return (
		<div id="sidelinks">
			<div className="container">
				<Link id="github" to="http://github.com/jayeshbhole/">
					<span>GitHub</span>
					<FaGithub />
				</Link>
				<Link id="linkedin" to="https://www.linkedin.com/in/jayesh-bhole-701086193/">
					<span>LinkedIn</span>
					<FaLinkedin />
				</Link>
				<a id="mail" href="mailto:jayeshbhole123@gmail.com">
					<span>Email</span>
					<FiAtSign />
				</a>
			</div>
		</div>
	);
};

export default SideLinks;
