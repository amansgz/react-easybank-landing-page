import "./Features.css";
import { features } from "../../constants";

const Features = () => (
	<section className="section-features" aria-label= "why us">
		<div>
			<h2>
				Why choose Easybank?
			 </h2>
			<p className= "text">	
	  		We leverage Open Banking to turn your bank account into your financial hub. Control 
	  		your finances like never before.
	  	</p>
		  
			<div className= "container-features">
			  {features.map((feature) => (
			    <article key={feature.id} 
			    	className= "feature">
			    	<figure className= "feature__icon">
			    		<img src= {feature.icon} />
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
)

export default Features;