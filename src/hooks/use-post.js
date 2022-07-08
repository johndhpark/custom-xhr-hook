import { useState } from "react";

const usePost = (URL, callbackFunc) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const enterTask = async (taskText) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(URL, {
				method: "POST",
				body: JSON.stringify({ text: taskText }),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!response.ok) {
				throw new Error("Request failed!");
			}
			const data = await response.json();

			const generatedId = data.name; // firebase-specific => "name" contains generated id
			const createdTask = { id: generatedId, text: taskText };

			callbackFunc(createdTask);
		} catch (err) {
			setError(err.message || "Something went wrong!");
		}
		setIsLoading(false);
	};

	return [isLoading, error, enterTask];
};

export default usePost;
