import { useState } from "react";
import Logo from "../shared/Logo/Logo";
import { iconClose, iconHamburger }from "../../assets";
import "./Navbar.css"
import Button from "../shared/Button/Button";


const Navbar = () => {

	const [toggle, setToggle] = useState(false);

	return(
		<nav className= "nav">
			<div className= "navbar">
				<Logo />
				<figure className= "navbar__hamburger">
					<img src= {toggle ? iconClose : iconHamburger}
					alt=""
					onClick= {() => setToggle((prev) => !prev)}
					/>
				</figure>
			</div>	
		
			<ul className= {`${!toggle ? "hidden" : "flex"} nav__menu`}>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
				<li>
					<a href="#">Blog</a>
				</li>
				<li>
					<a href="#">Careers</a>
				</li>
			</ul>
			<Button />
		</nav>
	);
}

export default Navbar;