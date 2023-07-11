import "./Footer.css";
import {Logo} from "../shared/Logo";
import SocialLinks from "../SocialLinks/SocialLinks";
import Button from "../shared/Button";


const Footer = () => (
	<footer className= "footer">	
		<div className= "grid">
			<div className= "item1">
				<Logo />
				<SocialLinks />
			</div>	
			<ul>
				<li>
					About Us
				</li>
				<li>
					Contact
				</li>
				<li>
					Blog
				</li>		
			</ul>
			<ul>
				<li>
					Careers
				</li>
				<li>
					Support
				</li>
				<li>
					Privacy Policy
				</li>	
			</ul>	
			<div className= "item4">
				<Button />
				<small>
					© Easybank. All Rights Reserved
				</small>	
			</div>
		</div>
	</footer>
);

export default Footer;