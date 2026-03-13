import { Pagination } from '@/components/Pagination';
import { Filters } from '@/components/Filters';
import { ListUsers } from '@/components/ListUsers';

const Home = () => {
	return (
		<section>
			<section className="min-h-65 flex items-center justify-center bg-blue-950 text-white rounded-2xl mb-4 lg:mb-6">
				<hgroup className="p-4 lg:p-10 text-center">
					<h1 className="font-bold text-4xl mb-2">Personajes de Rick and Morty</h1>
					<p className="text-lg opacity-50">Explora los personajes de la serie animada Rick and Morty</p>
				</hgroup>
			</section>
			<Filters />
			<Pagination />
			<ListUsers />
		</section>
	);
};

export default Home;
