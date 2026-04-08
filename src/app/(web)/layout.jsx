import WebFooter from "@/components/layouts/WebFooter";
import WebHeader from "@/components/layouts/WebHeader";

const WebLayout = ({ children }) => {
	return (
		<main>
			<WebHeader />
			<div className="max-w-5xl mx-auto">{children}</div>
			<WebFooter />
		</main>
	);
};

export default WebLayout;
