import "./Hero.css";
import Button from "../shared/Button";

const Hero = () => (
	<section className= "hero">
		<div>
			<h1>
				Next generation digital banking
			</h1>
			<p className= "hero__description">	
		  	Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
		  </p>	
			<Button />
		</div>

		<div className= "container-images">
		</div>
	</section>
);

export default Hero;