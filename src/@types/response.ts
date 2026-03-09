import type { User } from './user';

export type Response = {
	info: {
		count: number;
		pages: number;
		next: string | null;
		prev: string | null;
	};
	results: User[];
};