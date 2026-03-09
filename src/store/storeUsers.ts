import { create } from 'zustand';
import type { User } from '@/@types/index.ts';

type storeUsers = {
	userSelect: User | null;
	setUserSelect: (user: User | null) => void;
};

export const useStoreUsers = create<storeUsers>((set) => ({
	userSelect: null,
	setUserSelect: (user) => set({ userSelect: user }),
}));
