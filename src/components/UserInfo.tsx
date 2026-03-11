import type { User } from '../@types/user';
import { Link } from 'react-router';

type Props = {
	dataUser: User;
};

const UserInfo = ({ dataUser }: Props) => {
	const { id, image, name, status, species, type, gender, origin, location } = dataUser;

	return (
		<Link to={`user/${id}`} className="flex flex-col sm:flex-row items-center w-full max-w-73.5 sm:max-w-115 cursor-pointer border-2 border-gray-200 bg-gray-100 hover:bg-gray-200 hover:border-gray-900 focus:border-gray-900 focus-within:border-gray-900 active:scale-95 rounded-2xl transition-all duration-300 ease-in-out overflow-hidden">
			<img src={image} className="max-w-73.5 sm:max-w-53 rounded-2xl sm:rounded-l-2xl w-full h-full object-cover" width={200} height={200} alt={`Imagen de ${name} de ${origin}`} />
			<div className="w-full p-4 min-h-50 text-start">
				<div className="mb-4">
					<h2 className="text-xl font-bold max-w-57">{name}</h2>
					<div className="flex font-medium gap-2">
						<div>
							<span className={`${status === 'Alive' ? 'bg-green-500' : status === 'Dead' ? 'bg-red-500' : 'bg-gray-500'} rounded-full w-2 h-2 inline-block mr-2`}></span>
							{status === 'unknown' ? 'Alive?' : status}
						</div>
						-<span>{species} </span>-<span>{gender}</span>
					</div>
				</div>

				{type && <span className="block mb-4 font-medium text-sm max-w-57 text-blue-400">{type}</span>}

				<div>
					<h3 className="opacity-50 font-semibold text-sm">Last known location:</h3>
					<p className="max-w-57">{location.name}</p>
				</div>
			</div>
		</Link>
	);
};

export default UserInfo;
