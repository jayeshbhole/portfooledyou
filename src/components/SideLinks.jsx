import "../scss/sideLinks.scss";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";

const SideLinks = () => {
	return (
		<div id="sidelinks">
			<div className="container">
				<Link id="github">
					<span>GitHub</span>
					<FaGithub />
				</Link>
				<Link id="linkedin">
					<span>LinkedIn</span>
					<FaLinkedin />
				</Link>
				<Link id="mail">
					<span>Email</span>
					<FiAtSign />
				</Link>
			</div>
		</div>
	);
};

export default SideLinks;
