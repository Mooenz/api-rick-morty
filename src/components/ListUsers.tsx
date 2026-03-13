import { useUsers } from '@/hooks/useUsers.ts';
import type { User } from '@/@types/user.ts';
import UserInfo from '@/components/UserInfo.tsx';
import SkeletonListUser from '@/components/SkeletonListUser';
import MessageError from '@/components/MessageError.tsx';
import MessageEmpty from '@/components/MessageEmpty.tsx';

export const ListUsers = () => {
	const { data, isError, isLoading } = useUsers();

	return (
		<>
			{isLoading && <SkeletonListUser />}

			{isError && <MessageError error="Error al traer los datos, intenta nuevamente hacer la petición" reload={() => console.log('Reload')} />}

			{!data && !isLoading && !isError && <MessageEmpty message="No se encontraron personajes" />}

			{data && (
				<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
					{data?.map((dataUser: User, index: number) => (
						<UserInfo key={dataUser.id} dataUser={dataUser} index={index} />
					))}
				</section>
			)}
		</>
	);
};
