import "./Articles.css";
import { articles } from "../../constants";

const Articles = () => (	
	<section className= "section">
		<h2 className= "section__title">
			Latest Articles
		</h2>
		<div className= "container-articles">
			{articles.map ((article)=> (
				<article key= {article.id}
					className= "card-article">
					<picture>
						<img className= "card-article__image"
						src= {article.img} alt=""/>
					</picture>

					<div className= "wrapper">
						<span className= "card-article__author">
							{article.author}
						</span>
						<h3 className= "card-article__link">
							<a href="" >
								{article.title}
							</a>
						</h3>
						<p className= "card-article__content">
							{article.content}
						</p>
					</div>	
				</article>
			))}
		</div>	
	</section>
);

export default Articles;