import { useCallback, useEffect, useState } from "react";

const useFetch = (url, callbackFunc) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const memoizedFetchData = useCallback(async () => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error("Request failed!");
			}

			const data = await response.json();

			const loadedTasks = [];
			const taskKeys = Object.keys(data);

			taskKeys.forEach((taskKey) => {
				loadedTasks.push({ id: taskKey, text: data[taskKey].text });
			});

			if (callbackFunc) callbackFunc(loadedTasks);
		} catch (err) {
			setError(err.message || "Something went wrong!");
		}

		setIsLoading(false);
	}, [url, callbackFunc]);

	useEffect(() => {
		memoizedFetchData();
	}, [memoizedFetchData]);

	return [isLoading, error, memoizedFetchData];
};

export default useFetch;
