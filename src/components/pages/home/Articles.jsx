import Link from "next/link";
import { ArticleCard } from "./ArticleCard";
import { useApi } from "@/config/apiClient";

const Articles = () => {
	const { data, error, isLoading } = useApi("/api/posts");

	if (isLoading) {
		return (
			<section>
				<div className="flex justify-between items-end">
					<div>
						<h1 className="text-primary text-2xl">Latest Articles</h1>
						<p>Loading articles...</p>
					</div>
				</div>
				<div className="grid grid-cols-3 my-4 gap-4">
					{[1, 2, 3].map((i) => (
						<div key={i} className="w-full rounded-xl bg-gray-100 border border-gray-300 h-64 animate-pulse" />
					))}
				</div>
			</section>
		);
	}

	if (error) {
		return (
			<section>
				<div className="flex justify-between items-end">
					<div>
						<h1 className="text-primary text-2xl">Latest Articles</h1>
						<p className="text-red-500">Failed to load articles</p>
					</div>
				</div>
			</section>
		);
	}

	const articles = data?.posts || data || [];

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
				{articles.slice(0, 3).map((article, index) => {
					const { _v, ...articleData } = article;
					return (
						<ArticleCard
							key={articleData.id || index}
							image={articleData.image || "/images/article-1.png"}
							author={articleData.author?.name || articleData.author || "Unknown Author"}
							date={new Date(articleData.created_at || articleData.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
							title={articleData.title || "Untitled Article"}
							description={articleData.description || articleData.content?.substring(0, 100) + "..." || "No description available"}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Articles;
