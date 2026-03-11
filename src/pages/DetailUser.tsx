import { Link, useParams } from 'react-router';
import { useUser } from '@/hooks/useUser';
import ArrowLeft from '@/assets/ArrowLeft';
import { clearUrl } from '@/utils/clearUrl';

const DetailUser = () => {
	const params = useParams();
	const id = Number(params.id);

	const { data: userSelect, isLoading, isError } = useUser(id);

	const locationId = clearUrl(userSelect?.location?.url || '');
	const originId = clearUrl(userSelect?.origin?.url || '');
	const episodeIds = userSelect?.episode.map((episodeUrl) => clearUrl(episodeUrl ?? '')) as string[];
	const lengthEpisodes = episodeIds?.length || 0;
	return (
		<>
			{isLoading && <p>Cargando...</p>}
			{isError && <p>Error al cargar el usuario</p>}
			
			{!isLoading && !isError && userSelect && (
				<section className="flex flex-wrap gap-4 items-start">
					<Link to="/" className="flex items-center gap-2 text-blue-500 hover:text-blue-700 transition-colors duration-300">
						<ArrowLeft />
						Volver a la lista
					</Link>

					{userSelect ? (
						<div className="w-full max-w-2xl mx-auto rounded-2xl border-2 pt-6 border-gray-200 bg-gray-100">
							<section className="text-center">
								<figure>
									<img src={userSelect.image} alt={`Imagen de ${userSelect.name}`} className="w-30 h-30 md:w-40 md:h-40 lg:w-50 lg:h-50 rounded-full mb-4 object-cover mx-auto" />
								</figure>

								<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">{userSelect.name}</h1>
							</section>

							<section className="flex flex-col mt-10 pb-6">
								<div className="flex p-4 border-b border-gray-300 flex-wrap gap-4 justify-between font-semibold text-gray-500">
									<p>Status</p>

									<p className="font-normal text-gray-600">
										<span className={`${userSelect.status === 'Alive' ? 'bg-green-500' : userSelect.status === 'Dead' ? 'bg-red-500' : 'bg-gray-500'} rounded-full w-3 h-3 inline-block mr-2`}></span>
										{userSelect.status === 'unknown' ? 'Alive?' : userSelect.status}
									</p>
								</div>

								<p className="flex p-4 border-b border-gray-300 flex-wrap gap-4 justify-between font-semibold text-gray-500">
									Species <span className="font-normal text-gray-600">{userSelect.species}</span>
								</p>

								{userSelect.type && (
									<p className="flex p-4 border-b border-gray-300 flex-wrap gap-4 justify-between font-semibold text-gray-500">
										Type <span className="font-normal text-gray-600">{userSelect.type}</span>
									</p>
								)}

								<p className="flex p-4 border-b border-gray-300 flex-wrap gap-4 justify-between font-semibold text-gray-500">
									Gender <span className="font-normal text-gray-600">{userSelect.gender}</span>
								</p>

								<p className="flex p-4 border-b border-gray-300 flex-wrap gap-4 justify-between font-semibold text-gray-500">
									Origin
									<Link to={`/location/${originId}`} className="font-normal text-gray-600 hover:text-blue-500 transition-colors duration-300 ease-in-out">
										{userSelect.origin.name}
									</Link>
								</p>

								<p className="flex p-4 border-b border-gray-300 flex-wrap gap-4 justify-between font-semibold text-gray-500">
									Location
									<Link to={`/location/${locationId}`} className="font-normal text-gray-600 hover:text-blue-500 transition-colors duration-300 ease-in-out">
										{userSelect.location.name}
									</Link>
								</p>

								<p className="font-semibold text-gray-500 p-4">Episodes</p>
								<ul className="flex flex-wrap justify-between gap-4 px-4">
									{episodeIds.map((id, index) => (
										<li key={id} className={index + 1  === lengthEpisodes ? "mr-auto" : ""}>
											<Link to={`/episode/${id}`} className="flex-1 hover:flex-2 font-normal text-gray-600 hover:text-blue-500 transition-colors duration-300 ease-in-out">
												Episode {id}
											</Link>
										</li>
									))}
								</ul>
							</section>
						</div>
					) : (
						<p>User not found</p>
					)}
				</section>
			)}
		</>
	);
};

export default DetailUser;
