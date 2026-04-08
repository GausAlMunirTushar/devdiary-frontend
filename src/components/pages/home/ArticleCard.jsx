import Image from "next/image";
import Button from "@/components/ui/button";

export const ArticleCard = ({ image, author, title, date, description }) => {
	return (
		<div className="w-full rounded-xl bg-white border border-gray-300">
			<Image
				className="w-full rounded-t-xl"
				src={image}
				width={200}
				height={200}
				alt="Image"
			/>
			<div className="px-3 py-2">
				<div className="flex gap-2 items-center">
					<h1 className="font-semibold ">{author}</h1>
					<p className="text-gray-400">{date}</p>
				</div>
				<h1 className="text-2xl font-semibold my-2">{title}</h1>
				<p className="text-md line-clamp-2 my-2">{description}</p>
				<Button className="w-full bg-gray-100 text-black py-2 px-4 rounded-lg my-2">
					Read More
				</Button>
			</div>
		</div>
	);
};
