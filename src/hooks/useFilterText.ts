import type { User } from '@/@types/index';

export const useFilterText = (users: User[], searchText: string) => {
	const filteredUsers = searchText === '' ? users : users.filter((user) => user.name.toLowerCase().includes(searchText.toLowerCase()));

	return filteredUsers;
};
