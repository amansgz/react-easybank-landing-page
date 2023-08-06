import "./Footer.css";
import LogoWhiteText from "../shared/Logo/LogoWhite";
import SocialLinks from "../SocialLinks/SocialLinks";
import Button from "../shared/Button/Button";


const Footer = () => (
	<footer className= "footer">	
		<div className= "grid-1 grid-md-3">	
			<div className= "grid__col-1">
				<LogoWhiteText />
				<SocialLinks />
			</div>
		
			<ul className= "footer-nav grid-col-2">
				<li><a href= "#">About Us</a></li>
				<li><a href= "#">Contact</a></li>
				<li><a href= "#">Blog</a></li>
				<li><a href= "#">Careers</a></li>
				<li><a href= "#">Support</a></li>
				<li><a href= "#">Privacy Policy</a></li>	
			</ul>	
		
			<div className= "grid__col-3">
				<Button />
				<small className= "footer__copyright">
					© Easybank. All Rights Reserved
				</small>	
			</div>
		</div>	
	</footer>
);

export default Footer;