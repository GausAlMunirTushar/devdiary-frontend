import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

const LoginForm = () => {
	return (
		<div className="w-md border border-gray-200 p-4 h-auto rounded-md">
			<h1 className="text-3xl font-semibold text-center">Welcome Back</h1>
			<p className="text-md text-center">
				Log in to manage your blog and connect with the community
			</p>
			<div>
				<Input
					label={"Email"}
					type={"email"}
					placeholder={"dev@example.com"}
					className={"border border-gray-200 py-2 px-4 rounded-md"}
				/>
				<Input
					label={"Password"}
					type={"password"}
					placeholder={"********"}
					className={"border border-gray-200 py-2 px-4 rounded-md"}
				/>
			</div>
			<Button className="bg-primary text-white w-full py-2 px-4 rounded-md my-2">
				Login
			</Button>
		</div>
	);
};

export default LoginForm;
