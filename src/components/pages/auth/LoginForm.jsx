import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { FaEnvelope, FaLock, FaGoogle, FaGithub } from "react-icons/fa6";
import Link from "next/link";

const LoginForm = () => {
	return (
		<div className="w-md border border-gray-200 p-4 h-auto rounded-md">
			<h1 className="text-3xl font-semibold text-center">Welcome Back</h1>
			<p className="text-md text-center">
				Log in to manage your blog and connect with the community
			</p>
			<div className="space-y-4 mt-6">
				<Input
					label="Email"
					type="email"
					name="email"
					placeholder="dev@example.com"
					icon={FaEnvelope}
					required
				/>
				<Input
					label="Password"
					type="password"
					name="password"
					placeholder="********"
					icon={FaLock}
					required
				/>
			</div>
			<Button variant="primary" size="md" className="w-full mt-6">
				Login
			</Button>
			
			<div className="mt-6">
				<p className="text-center text-sm text-gray-500">
					Or continue with
				</p>
				<div className="flex gap-4 mt-4">
					<Button variant="secondary" size="md" className="flex-1 flex items-center justify-center gap-2">
						<FaGoogle /> Google
					</Button>
					<Button variant="secondary" size="md" className="flex-1 flex items-center justify-center gap-2">
						<FaGithub /> GitHub
					</Button>
				</div>
			</div>

			<p className="text-center text-sm text-gray-600 mt-6">
				Don't have an account?{" "}
				<Link href="/register" className="text-primary font-medium hover:underline">
					Sign Up
				</Link>
			</p>
		</div>
	);
};

export default LoginForm;
