import { useQuery } from '@tanstack/react-query';
import { getUSer } from '@/services/getUser';

export function useUser(id: number) {
	return useQuery({
		queryKey: ['user', id],
		queryFn: () => getUSer(id),
	});
}
