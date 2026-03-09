import { Link, useParams } from 'react-router';
import { useUser } from '@/hooks/useUser';

const DetailUser = () => {
	const params = useParams();
	const id = Number(params.id);

	const { data: userSelect, isLoading, isError } = useUser(id);

	return (
		<>
			{isLoading && <p>Cargando...</p>}

			{isError && <p>Error al cargar el usuario</p>}

			{!isLoading && !isError && userSelect && (
				<section className="min-h-dvh">
					{userSelect ? (
						<div className="flex flex-col items-center justify-center ">
							<img src={userSelect.image} alt={`Imagen de ${userSelect.name}`} className="w-64 h-64 rounded-full mb-4 object-cover" />
						</div>
					) : (
						<p>User not found</p>
					)}

					<Link to="/" className="bg-blue-500 text-white p-2 px-3 rounded-lg">
						Volver
					</Link>
				</section>
			)}
		</>
	);
};

export default DetailUser;
