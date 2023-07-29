import "./Articles.css";
import { articles } from "../../constants";

const Articles = () => (	
	<section className= "section-blog" aria-label= "blog">
		<div>
			<h2 className= "content__title">
				Latest Articles
			</h2>
			<div className= "flex-wrap-container">
				{articles.map ((article)=> (
					<article key= {article.id}
						className= "card">
						<picture>
							<img className= "card__image"
							src= {article.img} alt= "{article.alt}"/>
						</picture>

						<div className= "card__body">
							<span className="card__author">
								{article.author}
							</span>
							<h3 className= "card__title">
								<a href="" >
									{article.title}
								</a>
							</h3>
							<p className= "card__text">
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