"use client";
import Title from "@/components/shared/Title";
import Button from "@/components/ui/button";
import { useState } from "react";

const SettingsPage = () => {
	const [notifications, setNotifications] = useState(true);
	const [twoFactor, setTwoFactor] = useState(false);

	return (
		<div>
			<Title
				title="Settings"
				description="Manage your application preferences"
			/>
			<div className="space-y-6">
				<div className="bg-white border border-gray-200 rounded-lg p-6">
					<h3 className="text-lg font-semibold mb-4">General</h3>
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<div>
								<p className="font-medium">Email Notifications</p>
								<p className="text-sm text-gray-500">Receive email updates about your account</p>
							</div>
							<button
								onClick={() => setNotifications(!notifications)}
								className={`w-12 h-6 rounded-full transition-colors ${
									notifications ? "bg-primary" : "bg-gray-300"
								}`}
							>
								<div
									className={`w-5 h-5 bg-white rounded-full transition-transform ${
										notifications ? "translate-x-6" : "translate-x-0.5"
									}`}
								/>
							</button>
						</div>
						<div className="flex items-center justify-between">
							<div>
								<p className="font-medium">Two-Factor Authentication</p>
								<p className="text-sm text-gray-500">Add an extra layer of security</p>
							</div>
							<button
								onClick={() => setTwoFactor(!twoFactor)}
								className={`w-12 h-6 rounded-full transition-colors ${
									twoFactor ? "bg-primary" : "bg-gray-300"
								}`}
							>
								<div
									className={`w-5 h-5 bg-white rounded-full transition-transform ${
										twoFactor ? "translate-x-6" : "translate-x-0.5"
									}`}
								/>
							</button>
						</div>
					</div>
				</div>
				<div className="bg-white border border-gray-200 rounded-lg p-6">
					<h3 className="text-lg font-semibold mb-4 text-red-500">Danger Zone</h3>
					<p className="text-sm text-gray-600 mb-4">
						Once you delete your account, there is no going back. Please be certain.
					</p>
					<Button variant="danger" size="md">
						Delete Account
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SettingsPage;
