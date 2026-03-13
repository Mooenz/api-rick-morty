import type { User } from '@/@types/index';
import { useStoreUsers } from '@/store/storeUsers.ts';

export const useFilterSelect = (users: User[]) => {
	const statusFilter = useStoreUsers((state) => state.filterState);
	const filteredUsers = statusFilter === '' ? users : users.filter((user) => user.species.toLocaleLowerCase() === statusFilter);

	return filteredUsers;
};
