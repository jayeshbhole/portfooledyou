import "../scss/navbar.scss";
import { HashLink } from "react-router-hash-link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
const Navbar = () => {
	const [show, setShow] = useState(false);

	return (
		<nav className={`${show}`}>
			<div className={`nav ${show}`} onClick={() => setShow(false)}>
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
			</div>
			<span id="menu" onClick={() => setShow(!show)}>
				<HiMenuAlt1 className={`${!show}`} />
				<IoCloseOutline className={`${show}`} />
			</span>
		</nav>
	);
};

export default Navbar;
