import "../scss/sideLinks.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";

const SideLinks = () => {
	return (
		<div id="sidelinks">
			<div className="container">
				<a id="github" href="http://github.com/jayeshbhole/">
					<span>GitHub</span>
					<FaGithub />
				</a>
				<a id="linkedin" href="https://www.linkedin.com/in/jayesh-bhole-701086193/">
					<span>LinkedIn</span>
					<FaLinkedin />
				</a>
				<a id="mail" href="mailto:jayeshbhole123@gmail.com">
					<span>Email</span>
					<FiAtSign />
				</a>
			</div>
		</div>
	);
};

export default SideLinks;
