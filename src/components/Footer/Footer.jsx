import "./Footer.css";
import LogoWhiteText from "../shared/Logo/LogoWhite";
import SocialLinks from "../SocialLinks/SocialLinks";
import Button from "../shared/Button/Button";


const Footer = () => (
	<footer>	
		<div className= "container-footer">	
			<div className= "container-footer__item--1">
				<LogoWhiteText />
				<SocialLinks />
			</div>
		
			<ul className= "footer-nav">
				<li><a href= "#">About Us</a></li>
				<li><a href= "#">Contact</a></li>
				<li><a href= "#">Blog</a></li>
				<li><a href= "#">Careers</a></li>
				<li><a href= "#">Support</a></li>
				<li><a href= "#">Privacy Policy</a></li>	
			</ul>	
		
			<div className= "container-footer__item--3">
				<Button />
				<small>
					© Easybank. All Rights Reserved
				</small>	
			</div>
		</div>	
	</footer>
);

export default Footer;