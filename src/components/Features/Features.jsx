import "./Features.css";
import { features } from "../../constants";

const Features = () => (
	<section className= "container">
		<div className= "box">
			<h2 className= "box__title">
				Why choose Easybank?
			  </h2>
			<p className= "box__description">	
	  		We leverage Open Banking to turn your bank account into your financial hub. Control 
	  		your finances like never before.
	  	</p>
	  </div>

		<div className= "container-flex">
		  {features.map((feature) => (
		    <article key={feature.id} 
		    	className= "card">
		    	<figure className= "card__icon">
		    		<img src= {feature.icon} />
		    	</figure>	
		      <h3 className= "card__title">
		        {feature.title}
		      </h3>
		      <p className= "card__content">
		        {feature.content}
		      </p>
		    </article>
		  ))}
		</div> 	
  </section>		
)

export default Features;