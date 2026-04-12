import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { FaEnvelope, FaLock, FaUser, FaGoogle, FaGithub } from "react-icons/fa6";
import Link from "next/link";

const SignupForm = () => {
	return (
		<div className="w-md border border-gray-200 p-4 h-auto rounded-md">
			<h1 className="text-3xl font-semibold text-center">Create Account</h1>
			<p className="text-md text-center">
				Join our community and start sharing your expertise
			</p>
			<div className="space-y-4 mt-6">
				<Input
					label="Username"
					type="text"
					name="username"
					placeholder="johndoe"
					icon={FaUser}
					required
				/>
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
				Sign Up
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
				Already have an account?{" "}
				<Link href="/login" className="text-primary font-medium hover:underline">
					Login
				</Link>
			</p>
		</div>
	);
};

export default SignupForm;
