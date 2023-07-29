import "./Features.css";
import { features } from "../../constants";

const Features = () => (
	<section className="section-features" aria-label= "why us">
		<div className= "grid-1">
			<div className= "content">
				<h2 className="content__title">
					Why choose Easybank?
					</h2>
				<p className= "content__text">	
					We leverage Open Banking to turn your bank account into your financial hub. Control 
					your finances like never before.
				</p>
			</div>	
			
			<div className= "flex-wrap-container">
				{features.map((feature) => (
					<article key={feature.id} 
						className= "feature flex-column">
						<figure>
							<img src= {feature.icon} alt=""/>
						</figure>	
						<h3 className= "feature__title">
							{feature.title}
						</h3>
						<p className= "feature__text">
							{feature.content}
						</p>
					</article>
				))}
			</div>
		</div>
	</section>
);

export default Features;