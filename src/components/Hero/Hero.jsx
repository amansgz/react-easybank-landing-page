import "./Hero.css";
import Button from "../shared/Button/Button";
import {imgMockups} from "../../assets";

const Hero = () => (
	<section className= "hero" aria-label= "welcome">
		<div className= "container-sm-grid-1 container-md-grid-2">
			<div className= "item-image">
				<img className= "hero__image"
					src= {imgMockups} alt= "mockups devices"/>
			</div>
			
			<div className= "wrapper item-text">
				<h1 className= "hero__title">
					Next generation digital banking
				</h1>
				<p className= "hero__text">	
					Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
				</p>
				<Button />
			</div>
		</div>	
	</section>
);

export default Hero;