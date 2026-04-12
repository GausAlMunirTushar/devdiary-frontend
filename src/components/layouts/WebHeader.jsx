import Link from "next/link";
import Logo from "../shared/Logo";
import Button from "../ui/button";

const WebHeader = () => {
	return (
		<header className="border-b border-gray-200 py-4">
			<nav className="max-w-5xl mx-auto flex justify-between items-center">
				<Logo />
				<ul className="flex gap-5">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/blogs">Blogs</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
				</ul>
				<div className="space-x-4">
					<Link href="/login">Login</Link>
					<Link href="/register">
						<Button variant="primary" size="sm">
							Register
						</Button>
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default WebHeader;
