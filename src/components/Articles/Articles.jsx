import "./Articles.css";
import { articles } from "../../constants";

const Articles = () => (	
	<section aria-label= "blog">
		<div className= "container">
			<h2 className= "container__title">
				Latest Articles
			</h2>
			<div className= "container-cards">
				{articles.map ((article)=> (
					<article key= {article.id}
						className= "card">
						<picture>
							<img className= "card__image"
							src= {article.img} alt= "{article.alt}"/>
						</picture>

						<div className= "card-body">
							<span>
								{article.author}
							</span>
							<h3 className= "card-body__title">
								<a href="" >
									{article.title}
								</a>
							</h3>
							<p className= "card-body__text">
								{article.content}
							</p>
						</div>	
					</article>
				))}
			</div>	
		</div>
	</section>
);

export default Articles;