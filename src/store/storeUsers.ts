import { create } from 'zustand';
import type { User } from '@/@types/index.ts';

type storeUsers = {
	users: User[];
	page: string;
	filterState: string;
	filterText: string;
	count: number;
	pages: number;
	next: string | null;
	prev: string | null;
	setPageInfo: (pageInfo: { count: number; pages: number; next: string | null; prev: string | null }) => void;
	setFilterState: (setFilterState: string) => void;
	setFilterText: (filterText: string) => void;
	setUsers: (users: User[]) => void;
	setPage: (page: string) => void;
};

export const useStoreUsers = create<storeUsers>((set) => ({
	users: [],
	page: '1',
	filterState: '',
	filterText: '',
	count: 0,
	pages: 0,
	next: null,
	prev: null,
	setPageInfo: (pageInfo) =>
		set({
			count: pageInfo.count,
			pages: pageInfo.pages,
			next: pageInfo.next,
			prev: pageInfo.prev,
		}),
	setFilterState: (filterState) => set({ filterState }),
	setFilterText: (filterText) => set({ filterText }),
	setUsers: (users) => set({ users }),
	setPage: (page) => set({ page }),
}));
