import "./Hero.css";
import Button from "../shared/Button/Button";
import {imgMockups} from "../../assets";

const Hero = () => (
	<section aria-label= "welcome" className= "section-hero">
		<div className= "container-hero">
			<div className= "box">
				<img className= "box__image"
					src= {imgMockups} alt= "mockups devices"/>
			</div>
			
			<div className= "hero-description">
				<h1 className= "hero-description__title">
					Next generation digital banking
				</h1>
				<p className= "hero-description__text">	
					Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
				</p>
				<Button />
			</div>
		</div>	
	</section>
);

export default Hero;