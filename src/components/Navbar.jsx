import "../scss/navbar.scss";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
	return (
		<nav>
			<span>[</span>

			<HashLink smooth={true} to="/#">
				"Home",
			</HashLink>
			<HashLink smooth={true} to="/#About">
				"About",
			</HashLink>
			<HashLink smooth to="/#Projects">
				"Projects",
			</HashLink>
			<HashLink smooth to="/#Contact">
				"Contact"
			</HashLink>

			<span>]</span>
		</nav>
	);
};

export default Navbar;
