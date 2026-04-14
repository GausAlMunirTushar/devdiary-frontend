import useSWR from "swr";
import { useSWRInfinite } from "swr/infinite";

// Base API URL from environment variables
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Default fetcher function for SWR
const fetcher = async (url) => {
	const response = await fetch(`${API_BASE_URL}${url}`, {
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		const error = new Error("An error occurred while fetching the data.");
		error.status = response.status;
		error.info = await response.json().catch(() => null);
		throw error;
	}

	return response.json();
};

// Authenticated fetcher function
const authFetcher = async (url, token) => {
	const response = await fetch(`${API_BASE_URL}${url}`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		const error = new Error("An error occurred while fetching the data.");
		error.status = response.status;
		error.info = await response.json().catch(() => null);
		throw error;
	}

	return response.json();
};

// Default SWR configuration
const defaultSWRConfig = {
	revalidateOnFocus: false,
	revalidateOnReconnect: true,
	dedupingInterval: 2000,
	errorRetryCount: 3,
	errorRetryInterval: 5000,
	focusThrottleInterval: 5000,
	loadingTimeout: 5000,
};

// Custom hook for API calls with SWR
export const useApi = (endpoint, config = {}) => {
	const swrConfig = { ...defaultSWRConfig, ...config };

	return useSWR(endpoint, fetcher, swrConfig);
};

// Custom hook for authenticated API calls with SWR
export const useAuthApi = (endpoint, token, config = {}) => {
	const swrConfig = { ...defaultSWRConfig, ...config };

	return useSWR(
		token ? endpoint : null,
		token ? () => authFetcher(endpoint, token) : null,
		swrConfig,
	);
};

// Custom hook for paginated API calls with SWR Infinite
export const useInfiniteApi = (getKey, config = {}) => {
	const swrConfig = { ...defaultSWRConfig, ...config };

	return useSWRInfinite(getKey, fetcher, swrConfig);
};

// Custom hook for authenticated paginated API calls with SWR Infinite
export const useAuthInfiniteApi = (getKey, token, config = {}) => {
	const swrConfig = { ...defaultSWRConfig, ...config };

	return useSWRInfinite(
		token ? getKey : null,
		token ? fetcher : null,
		swrConfig,
	);
};

// Utility function for manual API calls (POST, PUT, DELETE, etc.)
export const apiCall = async (endpoint, options = {}) => {
	const { method = "GET", body = null, headers = {}, token = null } = options;

	const requestHeaders = {
		"Content-Type": "application/json",
		...headers,
	};

	if (token) {
		requestHeaders["Authorization"] = `Bearer ${token}`;
	}

	const requestOptions = {
		method,
		headers: requestHeaders,
	};

	if (body && ["POST", "PUT", "PATCH"].includes(method)) {
		requestOptions.body = JSON.stringify(body);
	}

	const response = await fetch(`${API_BASE_URL}${endpoint}`, requestOptions);

	if (!response.ok) {
		const error = new Error(`HTTP error! status: ${response.status}`);
		error.status = response.status;
		error.info = await response.json().catch(() => null);
		throw error;
	}

	// Handle no content response
	if (response.status === 204) {
		return null;
	}

	return response.json();
};

// Helper functions for common HTTP methods
export const api = {
	get: (endpoint, token) => apiCall(endpoint, { method: "GET", token }),
	post: (endpoint, body, token) =>
		apiCall(endpoint, { method: "POST", body, token }),
	put: (endpoint, body, token) =>
		apiCall(endpoint, { method: "PUT", body, token }),
	patch: (endpoint, body, token) =>
		apiCall(endpoint, { method: "PATCH", body, token }),
	delete: (endpoint, token) => apiCall(endpoint, { method: "DELETE", token }),
};

// SWR Configuration export for customization
export { defaultSWRConfig, fetcher, authFetcher };
