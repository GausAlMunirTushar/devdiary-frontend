import WebHeader from "@/components/layouts/WebHeader";

const WebLayout = ({ children }) => {
	return (
		<main>
			<WebHeader />
			<div className="max-w-5xl mx-auto">{children}</div>
		</main>
	);
};

export default WebLayout;
