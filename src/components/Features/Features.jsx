import "./Features.css";
import { features } from "../../constants";

const Features = () => (
	<section className= "container">
		<div className= "info">
			<h2 className= "info__title">
				Why choose Easybank?
			  </h2>
			<p className= "info__description">	
	  		We leverage Open Banking to turn your bank account into your financial hub. Control 
	  		your finances like never before.
	  	</p>
	  </div>

		<div className= "features-container">
		  {features.map((feature) => (
		    <article key={feature.id} 
		    	className= "feature">
		    	<img src= {feature.icon} />
		      <h3 className= "feature__title">
		        {feature.title}
		      </h3>
		      <p className= "feature__content">
		        {feature.content}
		      </p>
		    </article>
		  ))}
		</div> 	
  </section>		
)

export default Features;