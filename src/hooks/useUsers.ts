import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '@/services/getAllUsers';
import { useStoreUsers } from '@/store/storeUsers.ts';
import { useFilterSelect } from '@/hooks/useFilterSelect';
import { regexPage } from '@/utils/regexPage.ts';

export const useUsers = () => {
	const url = 'https://rickandmortyapi.com/api/character';
	const setPageInfo = useStoreUsers((state) => state.setPageInfo);
	const filterText = useStoreUsers((state) => state.filterText);
	const page = useStoreUsers((state) => state.page);
	const urlFinal = `${url}?${page ? `page=${page}` : ''}${filterText ? `&name=${filterText}` : ''}`;

	const query = useQuery({
		queryKey: ['users', urlFinal],
		queryFn: () => getAllUsers(urlFinal),
	});

	useEffect(() => {
		const next = query.data?.info.next ? regexPage(query.data.info.next) : null;
		const prev = query.data?.info.prev ? regexPage(query.data.info.prev) : null;

		if (query.data) {
			setPageInfo({ count: query.data.info.count, next: next ?? null, prev: prev ?? null, pages: query.data.info.pages });
		}
	}, [query.data, setPageInfo]);

	const usersFilter = useFilterSelect(query?.data?.results || []);

	return { data: usersFilter, isError: query.isError, isLoading: query.isLoading };
};
