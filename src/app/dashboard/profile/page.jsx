"use client";
import Title from "@/components/shared/Title";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const ProfilePage = () => {
	return (
		<div>
			<Title
				title="Profile Settings"
				description="Update your personal information"
			/>
			<div className="bg-white border border-gray-200 rounded-lg p-6">
				<div className="space-y-6">
					<div className="flex items-center gap-4">
						<div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl font-bold">
							JD
						</div>
						<Button variant="secondary" size="sm">
							Change Avatar
						</Button>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<Input
							label="Username"
							type="text"
							name="username"
							placeholder="johndoe"
							icon={FaUser}
						/>
						<Input
							label="Email"
							type="email"
							name="email"
							placeholder="john@example.com"
							icon={FaEnvelope}
						/>
						<Input
							label="Password"
							type="password"
							name="password"
							placeholder="••••••••"
							icon={FaLock}
						/>
						<Input
							label="Confirm Password"
							type="password"
							name="confirmPassword"
							placeholder="••••••••"
							icon={FaLock}
						/>
					</div>
					<div className="flex justify-end gap-4">
						<Button variant="secondary" size="md">
							Cancel
						</Button>
						<Button variant="primary" size="md">
							Save Changes
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
