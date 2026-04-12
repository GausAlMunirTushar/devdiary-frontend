import { FaArrowRight } from "react-icons/fa6";
import Button from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
	return (
		<section className="w-full flex py-10">
			<div className="w-1/2">
				<span className="border border-primary text-primary px-2 rounded-xl py-0.5">
					Full Stack Blog Platform
				</span>
				<h1 className="uppercase font-black text-7xl mt-4">
					Dev Diary{" "}
				</h1>
				<p className="my-2 text-gray-400">
					Share your development journey, document your technical
					breakthroughs, and connect with a community of expert
					builders.
				</p>
				<div className="flex gap-4 items-center mt-8">
					<Button variant="primary" size="lg" className="flex items-center gap-3">
						<span>Explore Blogs</span> <FaArrowRight size={16} />
					</Button>
					<Button variant="secondary" size="lg">
						How it Works
					</Button>
				</div>
			</div>
			<div className="w-1/2">
				<Image
					src={"/images/hero.png"}
					width={300}
					height={300}
					alt="Hero Banner"
					className="w-full"
				/>
			</div>
		</section>
	);
};

export default Hero;
