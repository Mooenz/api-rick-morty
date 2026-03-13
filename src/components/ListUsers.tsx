import { useUsers } from '@/hooks/useUsers.ts';
import type { User } from '@/@types/user.ts';
import UserInfo from '@/components/UserInfo.tsx';

export const ListUsers = () => {
	const { data, isError, isLoading } = useUsers();

	return (
		<>
			{isLoading && <p>El contenido está cargando</p>}

			{isError && <p>Error al traer los datos</p>}

			{!isLoading && !isError && (
				<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
					{data?.map((dataUser: User, index: number) => (
						<UserInfo key={dataUser.id} dataUser={dataUser} index={index} />
					))}
				</section>
			)}
		</>
	);
};
