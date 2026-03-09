import { useState, useEffect } from 'react';
import type { Response } from '@/@types/user';

export const filterText = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [data, setData] = useState<Response | null>(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				setError(null);
				const response = await fetch('https://rickandmortyapi.com/api/character');

				if (!response.ok) {
					throw new Error('Failed to fetch users');
				}

				const data = (await response.json()) as Response;
				setData(data);
				console.log(data);
			} catch (err) {
				setError(`Error get data: ${err}`);
				console.log('Error fetching de datos');
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();
	}, []);

	return { data, error, loading };
};
