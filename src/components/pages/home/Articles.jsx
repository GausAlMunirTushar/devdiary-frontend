import Link from "next/link";
import { ArticleCard } from "./ArticleCard";
import articles from "@/data/articles";

const Articles = () => {
	return (
		<section>
			<div className="flex justify-between items-end">
				<div>
					<h1 className="text-primary text-2xl">Latest Articles</h1>
					<p>Discover the latest trends in software engineering</p>
				</div>
				<Link href="/blogs" className="text-primary">
					View all posts
				</Link>
			</div>
			<div className="grid grid-cols-3 my-4 gap-4">
				<ArticleCard
					image={"/images/article-1.png"}
					author={"Alex Doe"}
					date={"Oct 24, 2024"}
					title={"Mastering React"}
					description={`Deep dive into custom hooks and performance
optimization techniques for modern React…`}
				/>
				<ArticleCard
					image={"/images/article-2.png"}
					author={"Alex Doe"}
					date={"Oct 24, 2024"}
					title={"Mastering React"}
					description={`Deep dive into custom hooks and performance
optimization techniques for modern React…`}
				/>
				<ArticleCard
					image={"/images/article-3.png"}
					author={"Alex Doe"}
					date={"Oct 24, 2024"}
					title={"Mastering React"}
					description={`Deep dive into custom hooks and performance
optimization techniques for modern React…`}
				/>
			</div>
		</section>
	);
};

export default Articles;
